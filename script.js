// var url = require('url');
var express = require('express');
// var http = require('http');

const app = express();
const port = 8900;

app.get('/', (req, res) => {
    res.send('<h1> Hello World! </h1>')
});
app.get('/home', (req, res) => {
    res.send('<h1> Home page </h1>')
});
app.get('/filter', (req, res) => {
    res.send('<h1> Filter Page </h1>')
});
app.get('/detail', (req, res) => {
    res.send('<h1> Detail Page </h1>')
});

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
});