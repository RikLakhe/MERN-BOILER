const express = require('express');
const AppConfig = require('../config/appConfig');
const AuthHandler = require('../middleware/AuthHandler');
const jwtUtils = require('../utils/jwtUtils');

const router = express.Router();

router.post("/login", (req, res, next) => {
    if (req.body) {
        const {userName, password} = req.body;
        if (!userName || !password) {
            return res
                .status(400)
                .json({
                    status: 'FAIL',
                    message: 'All field are required'
                });
        } else {
            if (userName === 'admin' && password === 'admin') {
                let accessToken = jwtUtils.freshToken({name: userName, type: 'ADMIN'}, '1 min');
                return res
                    .status(200)
                    .cookie('XSRF-TOKEN', accessToken, AppConfig.cookieOptionsLogin)
                    .json({
                        status: 'SUCCESS',
                        token: accessToken,
                        permission: 'ADMIN'
                    });
            } else if (userName === 'PPP' && password === 'ppp') {
                let accessToken = jwtUtils.freshToken({name: userName, type: 'PARTNER'}, '1 min');
                return res
                    .status(200)
                    .cookie('XSRF-TOKEN', accessToken, AppConfig.cookieOptionsLogin)
                    .json({
                        status: 'SUCCESS',
                        token: accessToken,
                        permission: 'PARTNER'
                    });
            } else {
                return res
                    .status(400)
                    .json({
                        status: 'FAIL',
                        message: 'Login failed'
                    });
            }

        }
    }
});

router.post("/logout", (req, res, next) => {
    res.clearCookie('XSRF-TOKEN');
    return res.json({status: "SUCCESS"})
});

router.post("/restrict", AuthHandler.tokenCheck, (req, res, next) => {
    return res.json({status: "testinggg"})
});

module.exports = router;

