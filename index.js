/**
 * Entry Script
 */
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
const dotEnvConfig = dotenv.config();

import {openServer} from './config/serverConfig.js'
import messageSend from "./utils/mailer";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.disable('etag');
app.use(express.static(path.resolve(__dirname, './client/build')));

messageSend('rikeshlakhe@gmail.com','gmail test','Hello there!');

openServer(app);