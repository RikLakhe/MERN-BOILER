const express = require('express');
const AppConfig = require('../config/appConfig');
const AuthHandler = require('../middleware/AuthHandler');

const jwtUtils = require('../utils/jwtUtils');
const cryptoUtils = require('../utils/cryptoUtil')
const {creatUser, findUser} = require('../controller/usersController')

const router = express.Router();

router.post("/login", (req, res, next) => {
    if (req.body) {
        const {data} = req.body;
        if (!data) {
            return res
                .status(400)
                .json({
                    status: 'FAIL',
                    message: 'All field are required'
                });
        } else {
            let response = cryptoUtils.decrypt(data);
            const {userName, password} = response;
            if (!userName || !password) {
                return res
                    .status(400)
                    .json({
                        status: 'FAIL',
                        message: 'All field are required'
                    });
            } else {
                findUser(userName, password).then(dbRes => {
                    if (dbRes && dbRes.length > 0) {
                        let accessToken = jwtUtils.freshToken({name: userName, type: 'ADMIN'}, '1 min');
                        return res
                            .status(200)
                            .cookie('XSRF-TOKEN', accessToken, AppConfig.cookieOptionsLogin)
                            .json({
                                data: cryptoUtils.encrypt({
                                    status: 'SUCCESS',
                                    token: accessToken,
                                    permission: dbRes[0].permission
                                })
                            });
                    } else {
                        return res
                            .status(400)
                            .json({
                                status: 'FAIL',
                                message: 'Login failed'
                            });
                    }
                })
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

