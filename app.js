const app = require('./server')

const PORT = 8080;

app.listen(PORT,function(){
    console.log(`Started Listening on port ${PORT}`);
})