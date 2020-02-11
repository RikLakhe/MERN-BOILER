const AppConfig = require('../config/appConfig');
const cryptoUtils = require('../utils/cryptoUtil');

const decryptHandler = (req, res, next) => {
    if (req.body) {
        const {data} = req.body;
        if (!data) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'FAIL',
                message: 'Error request'
            };
        } else {
            res.locals.decryptData = cryptoUtils.decrypt(data);
        }
    } else {
        res.locals.status = 400;
        res.locals.decryptData = {
            status: 'FAIL',
            message: 'Error request'
        };
    }
    console.log('decr',res.locals);
    next();
};

const encryptHandler = (req, res, next) => {
    console.log('final',res.locals.status,res.locals.encryptData)
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

module.exports = {decryptHandler, encryptHandler};