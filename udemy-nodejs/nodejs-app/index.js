var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.listen(port);

// Using middleware, can be done for static files. Express has a function for that.
// Below is just a sample code
app.use('/', function(req, res, next) {
    console.log(req.url);
    next();
});

app.get('/', function(req, res) {
    res.send("<html><head></head><body><h1>Hello World</h1></body></html>");
});

app.get('/person/:id', function(req, res) {
    res.send('Person with id ' + req.params.id);
});

