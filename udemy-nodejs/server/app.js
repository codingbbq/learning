var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // Read the file and then pass the data to the response.
    /*
    var html = fs.readFileSync(__dirname + '/index.html');
    res.end(html);
    */

    // Read the file stream and then pass it via pipe
    fs.createReadStream(__dirname + '/index.html').pipe(res);

}).listen(1337, '127.0.0.1');