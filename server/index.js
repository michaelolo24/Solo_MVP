var appServer = require('./server.js');

const port = process.env.PORT || 4568;

appServer.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
console.log('Server now listening on port ' + port);
});

