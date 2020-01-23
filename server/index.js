const express = require('express');
const path = require('path');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"../", "client", "build", "index.html"));
});

const port = process.env.PORT || "3000";


module.exports = start = () =>{
    app.listen(port,()=>{
        console.log(`Server running at port :${port}`);
    })
};

