var appServer = require('./server.js');

const port = process.env.PORT || 4568;

appServer.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server is running at http://localhost:3000');
});
console.log('Server now listening on port ' + port);
