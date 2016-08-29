var db = require('../server.js');
var express = require('express');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var notesSchema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  pwd: String,
});

