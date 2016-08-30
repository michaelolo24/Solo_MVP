var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var bluebird = require('bluebird');
var schema = mongoose.Schema;

var userSchema = new Schema({
  email: {type: String, required: true, index: {unique: true}},
  name: {type: String, required: true },
  pwd: {type: String, required:true}
});
var User = mongoose.model('User', userSchema);

User.pre('save', function(next){


});

