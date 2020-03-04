const express = require('express');

const {requestWithTokenHandler, requestGETWithTokenHandler, responseHandler} = require('../middleware/requestResponseHandler');

const {addCategory, listCategory, findCategoryById,deleteCategoryById} = require('../controller/categoriesController');

const router = express.Router();

router.post("/", requestWithTokenHandler, addCategory, responseHandler);
router.post("/list", requestWithTokenHandler, listCategory, responseHandler);
router.get("/:category_id", requestGETWithTokenHandler, findCategoryById, responseHandler);
router.delete("/:category_id", requestGETWithTokenHandler, deleteCategoryById, responseHandler);
router.post("/:category_id", requestWithTokenHandler, findCategoryById, responseHandler);

module.exports = router;