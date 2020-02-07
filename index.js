const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const AppConfig = require('./config/appConfig');
const Routes = require('./routes/routes');

const app = express();

app.use(
    logger('dev'),
    cors(),
    express.json(),
    cookieParser(AppConfig.cookieSecret),
    express.static(path.resolve(__dirname, "client", "build"))
    // express.static(path.resolve(__dirname, "testST"))
);
app.disable('etag');

// Router
app.use("/v1", Routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    // res.sendFile(path.join(__dirname, "testST", "index.html"));
});

const port = process.env.PORT || "3001";

app.listen(port, () => {
    console.log(`server running in port : ${port}`);

    // replace the uri string with your connection string.
    mongoose
        .connect(AppConfig.mongoDB.url, {
            dbName: AppConfig.mongoDB.database,
            useNewUrlParser: true,
        })
        .then(() => console.log(`DB Connected Database : ${AppConfig.mongoDB.database}`))
        .catch(err => console.log('error', err));
});
