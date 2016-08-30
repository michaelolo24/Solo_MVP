var appServer = require('./server.js');

const port = process.env.PORT || 4568;

appServer.listen(port);

console.log('Server now listening on port ' + port);
