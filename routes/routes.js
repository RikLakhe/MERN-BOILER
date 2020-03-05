const express = require('express');

const authRoute = require('./authRoute');
const categoryRoute = require('./categoriesRoute');
const userRoute = require('./userRoute');

const router = express.Router();

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/category", categoryRoute);

module.exports = router;