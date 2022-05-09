const express = require('express');

const route = express.Router();

route.get('/healthz',function(req,res){
    res.contentType('application/json');
    res.statusCode = 200;
    res.send();
})

module.exports = route;