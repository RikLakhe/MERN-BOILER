const express = require('express');

const { login, resendMailUser, signUp, verifyUser, verifyAdminUser } = require('../controller/authController');
const { requestOnlyHandler, requestWithTokenHandler, responseHandler } = require('../middleware/requestResponseHandler');

const router = express.Router();

router.post("/login", requestOnlyHandler, login, responseHandler);

router.post("/logout", (req, res, next) => {
    res.clearCookie('XSRF-TOKEN');
    return res.status(200).json({ status: "SUCCESS", message: 'Successfully logged out.' })
});

router.post("/sign-up", requestOnlyHandler, signUp, responseHandler);
router.get("/verify", verifyUser, responseHandler);
router.get("/admin/verify", verifyAdminUser, responseHandler);
router.get("/resend", resendMailUser, responseHandler);

router.post("/restrict", requestWithTokenHandler, (req, res, next) => {
    return res.json({ status: "testinggg" })
});

module.exports = router;

