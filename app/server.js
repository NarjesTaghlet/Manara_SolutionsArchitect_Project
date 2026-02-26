const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Hello from ${os.hostname()} - Scalable AWS App - This is manara graduation Project`);
});

server.listen(3000);