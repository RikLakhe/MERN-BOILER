const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const MongoClient = require('mongodb').MongoClient;

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
);
app.disable('etag');

// Router
app.use("/v1", Routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// replace the uri string with your connection string.
MongoClient.connect(AppConfig.mongoDB.url, function(err, client) {
    if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    console.log('Connected...');
    const collection = client.db("MERNLAKHE").collection("users");
    // perform actions on the collection object
    client.close();
});

const port = process.env.PORT || "3001";

app.listen(port, () => {
    console.log(`server running in port : ${port}`)
});
