var http = require('http');
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer((req, res) => {
    /*fs.readFile('testHTMLFile.html', function(err, data){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(data);
        res.end();
    });*/
    /*fs.appendFile('newAppendFile.txt', 'Newly Appended Content!', function(err){
        if (err) throw err;
        console.log('Append data saved!');
    });*/
    /*fs.open('newlyOpenedFile.txt', 'w', function(err, file){
        if(err) throw err;
        console.log('File Opened!');
    });*/
    /*fs.writeFile('newWriteFile.txt', 'Data to be written!', function(err){
        if(err) throw err;
        console.log('New file Written!');
    })*/
    /*fs.unlink('newAppendFile.txt', function(err){
        if(err) throw err;
        console.log('File Deleted!');
    });*/
    /*fs.rename('oldFileName.txt', 'newFileName.txt', function(err){
        if(err) throw err;
        console.log('File Renamed!');
    });*/
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
})