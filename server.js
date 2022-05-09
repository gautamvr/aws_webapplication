const express = require("express")

const app = express();
const postsRoute = require("./routes/posts")

const PORT = 8080;

app.use('/',postsRoute);

app.listen(PORT,()=>{
    console.log(`Started Listening on port ${PORT}`);
})

module.exports = app