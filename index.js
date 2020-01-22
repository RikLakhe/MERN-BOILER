const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const dotEnvConfig = dotenv.config();

const app = express();

app.use(express.static(path.resolve(__dirname, './client/build')));

const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server started on port ${port}`));