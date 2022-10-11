const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {})
  .listen(8080, () => console.log('connect to server'));
