var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Hello World, server is running at port 3000!");