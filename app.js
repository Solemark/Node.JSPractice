var http = require('http');
var url = require('url');
var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
})