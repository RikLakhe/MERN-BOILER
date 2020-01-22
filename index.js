// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');
//
// const dotEnvConfig = dotenv.config();
//
// const app = express();
//
// app.use(express.static(path.resolve(__dirname, "client", "build")));
//
// // Right before your app.listen(), add this:
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
//
// const port = process.env.PORT || 5000;
//
// app.listen(port,()=> console.log(`Server started on port ${port}`));

/**
 * Entry Script
 */
import express from 'express';
import cors from 'cors';
import path from 'path';
import logger from 'morgan';
import dotenv from 'dotenv';

const dotEnvConfig = dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.disable('etag');
app.use(express.static(path.resolve(__dirname, './client/build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
