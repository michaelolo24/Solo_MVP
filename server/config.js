var mongoose = require('mongoose');

mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/agorau';
mongo.connect(mongoURI);

var db = mongoose.connection;

db.on('error', function(error){
  console.log(error);
});

db.on('open', function(){
  console.log('MongoDB connection is now open!');
});

module.exports = db;
