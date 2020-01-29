const express = require('express');

const router = express.Router();

router.get("/",(req,res,next)=>{
    return res.status(200).json({
        message: 'SUCCESS'
    })
});

module.exports = router;

