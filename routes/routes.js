const express = require('express');

const authRoute = require('./authRoute');
const categoryRoute = require('./categoriesRoute');

const router = express.Router();

router.use("/auth", authRoute);
router.use("/category", categoryRoute);

module.exports = router;