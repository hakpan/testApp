var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get('/grabTom', function (request, response) {
	var cars = ['toyota', 'chevy', 'bmw', 'ford'];
	response.json(cars);
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});