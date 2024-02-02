//imported libraries
const express = require('express');
const bodyParser = require('body-parser');


//express app
const app = express()
app.use(bodyParser.json())



// error handling middleware
app.use((error, req, res, next) => {
    console.error('SERVER ERROR: ', error);
    if(res.statusCode < 400) res.status(500);
    res.send({error: error.message, name: error.name, message: error.message, table: error.table});
});


module.exports = app;




