const express = require('express');
const AppConfig = require('../config/appConfig');
const AuthHandler = require('../middleware/AuthHandler');
const jwtUtils = require('../utils/jwtUtils')

const router = express.Router();

router.post("/", (req, res, next) => {
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
            if(userName === 'admiN' && password === 'adminN'){
                let accessToken = jwtUtils.freshToken({name: userName, type: 'admin'}, '1 min');
                return res
                    .status(200)
                    .json({
                        status: 'SUCCESS',
                        token: accessToken
                    });
            }else{
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

router.post("/restrict", AuthHandler.tokenCheck, (req, res, next) => {
    return res.json({status: "testinggg"})
})

module.exports = router;

