var http = require('http');
var url = require('url');
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found!");
        }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
})