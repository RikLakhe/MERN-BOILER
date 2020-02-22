const express = require('express');

const {findUser} = require('../controller/usersController');

const {requestOnlyHandler,requestWithTokenHandler, responseHandler} = require('../middleware/requestResponseHandler');

const router = express.Router();

router.post("/login", requestOnlyHandler, findUser, responseHandler);

router.post("/logout", (req, res, next) => {
    res.clearCookie('XSRF-TOKEN');
    return res.json({status: "SUCCESS"})
});

router.post("/restrict", requestWithTokenHandler, (req, res, next) => {
    return res.json({status: "testinggg"})
});

module.exports = router;

