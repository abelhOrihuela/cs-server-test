var express = require('express'),
app = express(),
port = process.env.PORT || 3000;


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.listen(port);

var routes = require('./routes');
routes(app);

console.log('todo list RESTful API server started on: ' + port);
