const express = require('express');

const app = express();

const PORT = 8080;

app.listen(PORT,function(){
    console.log(`Started Listening on port ${PORT}`);
})

app.get('/healthz',function(req,res){
    res.contentType('application/json');
    res.statusCode = 200;
    res.send();
})