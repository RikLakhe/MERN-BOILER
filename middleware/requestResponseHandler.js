const AppConfig = require('../config/appConfig');
const {freshToken, isTokenExpired} = require('../utils/jwtUtils');
const {decrypt, encrypt} = require('../utils/cryptoUtil');

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

            responseHandler(req, res, next);
        } else {
            // data is send from front end encrypted, we decrypt and process the req next
            res.locals.decryptData = decrypt(data);

            next();
        }
    } else {
        res.locals.status = 401;
        res.locals.decryptData = {
            status: 'FAIL',
            message: 'Error request'
        };

        responseHandler(req, res, next);
    }
};

const requestWithTokenHandler = (req, res, next) => {
    // token and req decryption handling
    if (
        process.env.NODE_ENV === 'production' ?
            req.headers['xsrf-token'] && req.signedCookies['XSRF-TOKEN'] && req.signedCookies['XSRF-TOKEN'] === req.headers['xsrf-token'] : req.headers['xsrf-token']
    ) {


        // token handling check token validation with time
        let tokenStatus = isTokenExpired(req.headers['xsrf-token']);
        if (!tokenStatus) {

            res.locals.newAccessToken = freshToken({status: "new token"}, '5 min');

            // decrypt data from body and pass into next handler
            if (req && req.body) {
                const {data} = req.body;

                // no data is sent from front end send error
                if (!data) {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        data: {type:'warning', message: 'Error request'}
                    };

                    responseHandler(req, res, next);
                } else {
                    // data is send from front end encrypted, we decrypt and process the req next
                    res.locals.decryptData = decrypt(data);

                    next();
                }
            } else {
                res.locals.status = 400;
                res.locals.encryptData = {
                    status: 'FAIL',
                    data: {type:'warning', message: 'Error request'}
                };

                responseHandler(req, res, next);
            }
        } else {
            res.locals.status = 401;
            res.locals.encryptData = {
                status: 'FAIL',
                data: {type:'warning', message: 'Unauthorized'}
            };

            responseHandler(req, res, next);
        }
    } else {

        // if no headers and no signed cookies are sent
        res.locals.status = 401;
        res.locals.encryptData = {
            status: 'FAIL',
            data: {type:'warning', message: 'Unauthorized'}
        };

        responseHandler(req, res, next);
    }
};

const requestGETWithTokenHandler = (req, res, next) => {
    // token and req decryption handling
    if (
        process.env.NODE_ENV === 'production' ?
            req.headers['xsrf-token'] && req.signedCookies['XSRF-TOKEN'] && req.signedCookies['XSRF-TOKEN'] === req.headers['xsrf-token'] : req.headers['xsrf-token']
    ) {
        // token handling check token validation with time
        let tokenStatus = isTokenExpired(req.headers['xsrf-token']);
        if (!tokenStatus) {
            res.locals.newAccessToken = freshToken({status: "new token"}, '5 min');

            next();
        } else {
            res.locals.status = 401;
            res.locals.encryptData = {
                status: 'FAIL',
                data: {type:'warning', message: 'Unauthorized'}
            };

            responseHandler(req, res, next);
        }
    } else {
        // if no headers and no signed cookies are sent
        res.locals.status = 401;
        res.locals.encryptData = {
            status: 'FAIL',
            data: {type:'warning', message: 'Unauthorized'}
        };

        responseHandler(req, res, next);
    }
};

const responseHandler = (req, res, next) => {
    if (res.locals.status === 200 && res.locals.newAccessToken) {
        return res
            .status(res.locals.status)
            .header('XSRF-TOKEN', res.locals.newAccessToken)
            .cookie('XSRF-TOKEN', res.locals.newAccessToken, AppConfig.cookieOptionsLogin)
            .json({
                data: encrypt(res.locals.encryptData)
            })
    } else {
        return res
            .status(res.locals.status)
            .json({
                data: encrypt(res.locals.encryptData)
            })
    }
};

module.exports = {requestOnlyHandler, requestWithTokenHandler, responseHandler, requestGETWithTokenHandler};