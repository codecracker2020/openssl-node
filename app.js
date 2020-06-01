const https = require('https')
const fs = require('fs')
var express = require('express');
const app = express()
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(3000, () => {
    console.log('Listening on https 3000...')
  })
app.get('/greeting',(req,res)=>{
    res.send("Hello, I am running on https")
});
