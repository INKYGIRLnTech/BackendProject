//imported libraries
const express = require('express');
const productRouter = require('./routes/products');



//express app
const app = express()
app.use(express.json())
app.use("/products", productRouter);


// error handling middleware
app.use((error, req, res, next) => {
    console.error('SERVER ERROR: ', error);
    if(res.statusCode < 400) res.status(500);
    res.send({error: error.message, name: error.name, message: error.message, table: error.table});
});


module.exports = app;




