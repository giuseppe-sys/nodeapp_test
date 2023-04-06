var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Giuseppe Farina312321" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello Andrea Rognetta!!!!!!" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, Wow!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
