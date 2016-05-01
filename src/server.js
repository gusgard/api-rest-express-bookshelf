var express = require('express');
var app = express();
var setRoutes = require('./api/routes');

setRoutes(app);

module.exports = app;
