const app = require('./app.js')

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Started Listening on port ${PORT}`);
})
