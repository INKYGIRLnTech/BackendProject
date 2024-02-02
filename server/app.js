//imported libraries
const express = require('express');
const bodyParser = require('body-parser');


//express app
const app = express()
app.use(bodyParser.json())


module.exports = app;




