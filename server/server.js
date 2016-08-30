const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const express = require('express');

const appServer = express();
const compiler = webpack(config);

appServer.use(express.static(__dirname));
appServer.use(webpackMiddleware(compiler));
appServer.use(webpackHotMiddleware(compiler));
appServer.use('/dist', express.static(path.join(__dirname, 'dist')));
appServer.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});


module.exports = appServer;
