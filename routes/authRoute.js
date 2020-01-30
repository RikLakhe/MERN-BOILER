const express = require('express');
const AppConfig = require('../config/appConfig');
const AuthHandler = require('../middleware/AuthHandler')

const router = express.Router();

router.get("/", AuthHandler.cookieSet2, (req, res, next) => {
    return res.status(200).json({
        message: 'SUCCESS'
    })
});

// router.post("/", AuthHandler.checkCookies, AuthHandler.cookieSet, (req, res, next) => {
router.post("/", (req, res, next) => {
    console.log('here', req.body, req.headers['xsrf-token']);
    if(req.body){
        const {userName, password} = req.body;
        if(!userName || !password){
            return res.status(400).json({
                message: 'FAIL'
            });
        }else{
            return res.json({
                message: 'SUCCESS'
            });
        }
    }


});

module.exports = router;

