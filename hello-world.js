const http = require('http');

const hostname = 'http://localhost/';
const port = 3000;

function httpRequestHandler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
}

const server = http.createServer();

server.on('request', httpRequestHandler);

server.listen(port, hostname);

