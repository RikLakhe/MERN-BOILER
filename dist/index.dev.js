"use strict";

var express = require('express');

var path = require('path');

var logger = require('morgan');

var cors = require('cors');

var cookieParser = require('cookie-parser');

var mongoose = require('mongoose');

var dotenv = require('dotenv');

dotenv.config();

var AppConfig = require('./config/appConfig');

var Routes = require('./routes/routes');

var app = express();
var corsOptions = {
  exposedHeaders: 'XSRF-TOKEN'
};
app.use(logger('dev'), cors(corsOptions), express.json(), cookieParser(AppConfig.cookieSecret), express["static"](path.resolve(__dirname, "client", "build")) // express.static(path.resolve(__dirname, "testST"))
);
app.disable('etag'); // Router

app.use("/v1", Routes);
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html")); // res.sendFile(path.join(__dirname, "testST", "index.html"));s
});
var port = process.env.PORT || "3001";
app.listen(port, function () {
  console.log("server running in port : ".concat(port)); // replace the uri string with your connection string.
  // mongoose
  //     .connect(AppConfig.mongoDB.url, {
  //         dbName: AppConfig.mongoDB.database,
  //         useNewUrlParser: true,
  //         useUnifiedTopology: true
  //     })
  //     .then(() => console.log(`DB Connected Database : ${AppConfig.mongoDB.database}`))
  //     .catch(err => console.log('error', err));
});