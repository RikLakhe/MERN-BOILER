const AppConfig = require('../config/appConfig');

module.exports = {
    cookieSet: (req, res, next) => {
        res.cookie('XSRF-TOKEN', res.locals.accessToken , AppConfig.cookieOptions);
        next();
    },
    cookieSet2: (req, res, next) => {
        res.cookie('XSRF-TOKEN', '123456789' , AppConfig.cookieOptions);
        next();
    },
    checkCookies: (req,res,next) =>{
        let cookieToken = req.signedCookies['XSRF-TOKEN'];
    //    let accessToken = getNewAccessToken(cookieToken)
        res.locals.accessToken = 'middleware';
        next();
    }
};