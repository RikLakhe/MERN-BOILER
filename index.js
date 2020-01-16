/**
 * Entry Script
 */

import http from 'http';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';

import dotenv from 'dotenv';
const dotEnvConfig = dotenv.config();

import config from './config/serverConfig.js'

const port = process.env.APP_SERVER_PORT || "3002";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.disable('etag');
app.use(express.static(path.resolve(__dirname, './client/build')));

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running at port : http://localhost:3002/${server.address().port}`);
});