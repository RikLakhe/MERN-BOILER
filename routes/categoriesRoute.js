const express = require('express');

const {requestWithTokenHandler, responseHandler} = require('../middleware/requestResponseHandler');

const {addCategory,listCategory} = require('../controller/categoriesController');

const router = express.Router();

router.post("/", requestWithTokenHandler, addCategory, responseHandler);
router.post("/list", requestWithTokenHandler, listCategory, responseHandler);

module.exports = router;