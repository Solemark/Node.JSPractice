var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer((req, res) => {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          var oldpath = files.filetoupload.filepath;
          var newpath = 'C:/Users/' + files.filetoupload.originalFilename;
          fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
          });
        })
    } else{
        res.writeHeader(200, {'Content-type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br />');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
})
