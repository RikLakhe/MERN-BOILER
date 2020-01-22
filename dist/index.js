"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _serverConfig = require("./config/serverConfig.js");

var _mailer = _interopRequireDefault(require("./utils/mailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Entry Script
 */
var dotEnvConfig = _dotenv["default"].config();

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.disable('etag');
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, './client/build')));
(0, _mailer["default"])('rikeshlakhe@gmail.com', 'gmail test', 'Hello there!');
(0, _serverConfig.openServer)(app);