const express = require('express');

const {creatUser, findUser, findUserById, findPendingUserById, findPendingUsers} = require('../controller/usersController');

const {requestGETWithTokenHandler, requestWithTokenHandler, responseHandler} = require('../middleware/requestResponseHandler');

const router = express.Router();

router.get("/:user_id", requestWithTokenHandler, findUserById, responseHandler);
router.post("/pending", requestWithTokenHandler, findPendingUsers, responseHandler);
router.get("/pending/:user_id", requestGETWithTokenHandler, findPendingUserById, responseHandler);

module.exports = router;

