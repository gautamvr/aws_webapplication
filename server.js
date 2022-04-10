const express = require('express');

const app = express();

app.get('/healthz',function(req,res){
    res.contentType('application/json');
    res.statusCode = 200;
    res.send();
})

module.exports = app;