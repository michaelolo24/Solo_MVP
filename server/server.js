var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/agora');

app.listen(3000);

module.exports = app;