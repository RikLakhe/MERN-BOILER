const AppConfig = require('../config/appConfig');
const jwtUtils = require('../utils/jwtUtils');
const cryptoUtils = require('../utils/cryptoUtil');

const requestOnlyHandler = (req, res, next) => {
    // decrypt data from body and pass into next handler
    if (req && req.body) {
        const {data} = req.body;

        // no data is sent from front end send error
        if (!data) {
            res.locals.status = 401;
            res.locals.encryptData = {
                status: 'FAIL',
                message: 'Error request'
            };
        } else {
            // data is send from front end encrypted, we decrypt and process the req next
            res.locals.decryptData = cryptoUtils.decrypt(data);
        }
    } else {
        res.locals.status = 401;
        res.locals.decryptData = {
            status: 'FAIL',
            message: 'Error request'
        };
    }

    next();
};

const requestWithTokenHandler = (req, res, next) => {
    console.log('restrict', req.headers['xsrf-token'], req.signedCookies['XSRF-TOKEN'])
    // token and req decryption handling
    if (
        process.env.NODE_ENV === 'production' ?
            req.headers['xsrf-token'] && req.signedCookies['XSRF-TOKEN'] && req.signedCookies['XSRF-TOKEN'] === req.headers['xsrf-token'] : req.headers['xsrf-token']
    ) {


        // token handling check token validation with time
        let tokenStatus = jwtUtils.isTokenExpired(req.headers['xsrf-token']);
        if (!tokenStatus) {

            res.locals.newAccessToken = jwtUtils.freshToken({status: "new token"}, '5 min');

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

    next();
};

const responseHandler = (req, res, next) => {
    console.log('at last', res.locals.status, res.locals.newAccessToken);
    if (res.locals.status === 200 && !res.locals.accessToken && res.locals.newAccessToken) {
        console.log('at last 1', res.locals.status, res.locals.newAccessToken);
        return res
            .status(res.locals.status)
            .header('XSRF-TOKEN', res.locals.newAccessToken)
            .cookie('XSRF-TOKEN', res.locals.newAccessToken, AppConfig.cookieOptionsLogin)
            .json({
                data: cryptoUtils.encrypt(res.locals.encryptData)
            })
    } else {
        return res
            .status(res.locals.status)
            .json({
                data: cryptoUtils.encrypt(res.locals.encryptData)
            })
    }
};

module.exports = {requestOnlyHandler, requestWithTokenHandler, responseHandler};