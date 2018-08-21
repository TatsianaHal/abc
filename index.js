// hbs:
const hbs = require('hbs');

const express = require("express");
const app = express();
// app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});