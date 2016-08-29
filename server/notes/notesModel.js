var db = require('../server.js');
var express = require('express');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new Schema({
  id: String,
  user: String,
  body: String,
  timestamp: Number,
  videos: Array
});



