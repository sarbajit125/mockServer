var express = require('express');
var apiMocker = require('connect-api-mocker');

var app = express();

app.use('/mobiquitypay', apiMocker('server'));

app.listen(8080, ()=> {
    console.log("listening  on port 8080");
});