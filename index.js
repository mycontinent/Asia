var express = require('express');
var app = express();

var apiRouter = require('./API/GitApi');
app.get('/', function (req, res) {
  res.send('Welcome To Express API ');
})
app.use('/api',apiRouter);
app.listen(9000);