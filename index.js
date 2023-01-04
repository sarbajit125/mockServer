
require('dotenv').config()
var express = require('express');
var apiMocker = require('connect-api-mocker');

var app = express();

app.use(`/${process.env.HOST_NAME}`, apiMocker('server'));

app.listen(5000, ()=> {
    console.log("listening  on port 5000");
});