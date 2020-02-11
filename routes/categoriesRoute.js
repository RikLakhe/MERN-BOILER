const express = require('express');
const AuthHandler = require('../middleware/AuthHandler');

const {requestOnlyHandler,requestWithTokenHandler, responseHandler} = require('../middleware/reqrestHandler');

const {addCategory} = require('../controller/categoriesController');

const router = express.Router();

router.post("/", requestWithTokenHandler, addCategory, responseHandler);

module.exports = router;