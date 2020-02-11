const cookieParser = require('cookie-parser');

const AppConfig = require('../config/appConfig');
const jwtUtils = require('../utils/jwtUtils');

module.exports = {
    cookieSet: (req, res, next) => {
        res.cookie('XSRF-TOKEN', res.locals.accessToken, AppConfig.cookieOptions);
        next();
    },
    freshCookieSet: (req, res, next) => {
        res.cookie('XSRF-TOKEN', '123456789', AppConfig.cookieOptions);
        next();
    },
    checkCookies: (req, res, next) => {
        let cookieToken = req.signedCookies['XSRF-TOKEN'];
        //    let accessToken = getNewAccessToken(cookieToken)
        res.locals.accessToken = 'middleware';
        next();
    },
    tokenCheck: (req, res, next) => {
        if (req.headers['xsrf-token'] && req.signedCookies['XSRF-TOKEN'] && req.signedCookies['XSRF-TOKEN'] === req.headers['xsrf-token']) {
            let tokenStatus = jwtUtils.isTokenExpired(req.headers['xsrf-token']);
            if (!tokenStatus) {
                let accessToken = jwtUtils.freshToken({status: "new token"}, '5 min');
                res.cookie('XSRF-TOKEN', accessToken, AppConfig.cookieOptions);
                res.setHeader('xsrf-token', accessToken);
                next();
            } else {
                return res.status(401).json({
                    status: 'FAIL',
                    message: 'Unauthorized'
                })
            }
        } else {
            return res.status(401).json({
                status: 'FAIL',
                message: 'Unauthorized'
            })
        }
    }
};