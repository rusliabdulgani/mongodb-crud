const express = require('express');
const books = require('./routers/books');
const bodyParser = require('body-parser');
const morgan = require('morgan');

var app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', books)

app.listen(3000)
