

const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html', 'css/app.css', 'app/books.js'));
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});