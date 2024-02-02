//imported libraries
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

//express app
const app = express()
app.use(bodyParser.json())

//server
const PORT = process.env.Port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})