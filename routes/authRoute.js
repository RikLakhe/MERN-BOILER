const express = require('express');
const AppConfig = require('../config/appConfig');
const AuthHandler = require('../middleware/AuthHandler')

const router = express.Router();

router.get("/", AuthHandler.cookieSet2, (req, res, next) => {
    return res.status(200).json({
        message: 'SUCCESS'
    })
});

router.post("/", AuthHandler.checkCookies, AuthHandler.cookieSet, (req, res, next) => {
    console.log('here', req.body, req.signedCookies['XSRF-TOKEN']);
    return res.json({
        message: 'SUCCESS'
    });
});

module.exports = router;

