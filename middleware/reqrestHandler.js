const AppConfig = require('../config/appConfig');
const jwtUtils = require('../utils/jwtUtils');
const cryptoUtils = require('../utils/cryptoUtil');

const requestOnlyHandler = (req, res, next) => {
    // decrypt data from body and pass into next handler
    if (req && req.body) {
        const {data} = req.body;

        // no data is sent from front end send error
        if (!data) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'FAIL',
                message: 'Error request'
            };
        } else {
            // data is send from front end encrypted, we decrypt and process the req next
            res.locals.decryptData = cryptoUtils.decrypt(data);
        }
    } else {
        res.locals.status = 400;
        res.locals.decryptData = {
            status: 'FAIL',
            message: 'Error request'
        };
    }

    console.log('request without token handling');
    next();
};

const requestWithTokenHandler = (req, res, next) => {
    // token and req decryption handling
    if (
        req.headers['xsrf-token'] &&
        req.signedCookies['XSRF-TOKEN'] &&
        req.signedCookies['XSRF-TOKEN'] === req.headers['xsrf-token']
    ) {

        // token handling check token validation with time
        let tokenStatus = jwtUtils.isTokenExpired(req.headers['xsrf-token']);
        if (!tokenStatus) {
            let accessToken = jwtUtils.freshToken({status: "new token"}, '5 min');
            res.cookie('XSRF-TOKEN', accessToken, AppConfig.cookieOptions);
            res.setHeader('xsrf-token', accessToken);

            // decrypt data from body and pass into next handler
            if (req && req.body) {
                const {data} = req.body;

                // no data is sent from front end send error
                if (!data) {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        message: 'Error request'
                    };
                } else {
                    // data is send from front end encrypted, we decrypt and process the req next
                    res.locals.decryptData = cryptoUtils.decrypt(data);
                }
            } else {
                res.locals.status = 400;
                res.locals.decryptData = {
                    status: 'FAIL',
                    message: 'Error request'
                };
            }
        } else {
            res.locals.status = 401;
            res.locals.encryptData = {
                status: 'FAIL',
                message: 'Unauthorized'
            };
        }
    } else {

        // if no headers and no signed cookies are sent
        res.locals.status = 401;
        res.locals.encryptData = {
            status: 'FAIL',
            message: 'Unauthorized'
        };
    }

    console.log('req handled with token');
    next();
};

const responseHandler = (req, res, next) => {
    return (res.locals.status && res.locals.accessToken) ?
        res
            .status(res.locals.status)
            .cookie('XSRF-TOKEN', res.locals.accessToken, AppConfig.cookieOptionsLogin)
            .json({
                data: cryptoUtils.encrypt(res.locals.encryptData)
            })
        :
        res
            .status(res.locals.status)
            .json({
                data: cryptoUtils.encrypt(res.locals.encryptData)
            })

};

module.exports = {requestOnlyHandler, requestWithTokenHandler, responseHandler};