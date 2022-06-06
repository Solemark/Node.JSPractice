var http = require('http');
var url = require('url');
var hostname = '127.0.0.1';
var port = 3000;
var cTime = require('./currentTime');

var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write('<p>Hello World! <br />The current date and time is: ' + cTime.currentTime() + '<br />' + req.url +'</p>');
    res.end(txt);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
})