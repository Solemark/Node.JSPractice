var http = require('http');
var uc = require('upper-case');
var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(uc.upperCase("hello world!"));
    res.end();
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
})