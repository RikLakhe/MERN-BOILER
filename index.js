const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get("*", (req, res) => {
    res.json({"ggg":'gggggg'});
});

const port = process.env.PORT || "3001";

app.listen(port,()=>{
    console.log(`server running in port : ${port}`)
})