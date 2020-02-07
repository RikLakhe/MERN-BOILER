const express = require('express');
const AppConfig = require('../config/appConfig');
const jwtUtils = require('../utils/jwtUtils');
const cryptoUtils = require('../utils/cryptoUtil');

const {findUser} = require('../controller/usersController');

const AuthHandler = require('../middleware/AuthHandler');
const {decryptHandler, encryptHandler} = require('../middleware/encryptHandle');

const router = express.Router();

router.post("/login", decryptHandler, (req, res, next) => {
    // if (req.body) {
    //     const {data} = req.body;
    //     if (!data) {
    //         return res
    //             .status(400)
    //             .json({
    //                 status: 'FAIL',
    //                 message: 'All field are required'
    //             });
    //     } else {
    //         let response = cryptoUtils.decrypt(data);
    //         const {userName, password} = response;
    //         if (!userName || !password) {
    //             return res
    //                 .status(400)
    //                 .json({
    //                     status: 'FAIL',
    //                     message: 'All field are required'
    //                 });
    //         } else {
    //             findUser(userName, password).then(dbRes => {
    //                 if (dbRes && dbRes.length > 0) {
    //                     let accessToken = jwtUtils.freshToken({name: userName, type: 'ADMIN'}, '1 min');
    //                     return res
    //                         .status(200)
    //                         .cookie('XSRF-TOKEN', accessToken, AppConfig.cookieOptionsLogin)
    //                         .json({
    //                             data: cryptoUtils.encrypt({
    //                                 status: 'SUCCESS',
    //                                 token: accessToken,
    //                                 permission: dbRes[0].permission
    //                             })
    //                         });
    //                 } else {
    //                     return res
    //                         .status(400)
    //                         .json({
    //                             status: 'FAIL',
    //                             message: 'Login failed'
    //                         });
    //                 }
    //             })
    //         }
    //     }
    // }
    console.log('decr2', res.locals);
    if (res.locals.decryptData) {
        console.log('decr3', res.locals.decryptData);
        const {userName, password} = res.locals.decryptData;
        if (!userName || !password) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'FAIL',
                message: 'All field are required'
            };
        } else {
            console.log('decr4', userName, password);
            findUser(userName, password).then(dbRes => {
                console.log('decr4', userName, password,dbRes);
                if (dbRes && dbRes.length > 0) {
                    console.log('found')
                    res.locals.status = 200;
                    res.locals.accessToken = jwtUtils.freshToken({name: userName, type: 'ADMIN'}, '1 min');
                    res.locals.encryptData = {
                        status: 'SUCCESS',
                        token: res.locals.accessToken,
                        permission: dbRes[0].permission
                    };
                } else {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        message: 'Login Fail'
                    };
                }
                next();
            })
        }
    } else {
        res.locals.status = 400;
        res.locals.encryptData = {
            status: 'FAIL',
            message: 'Login Fail'
        };
    }
    console.log('ggggggg 2222', res.locals)
    next();
}, encryptHandler);

router.post("/logout", (req, res, next) => {
    res.clearCookie('XSRF-TOKEN');
    return res.json({status: "SUCCESS"})
});

router.post("/restrict", AuthHandler.tokenCheck, (req, res, next) => {
    return res.json({status: "testinggg"})
});

module.exports = router;

