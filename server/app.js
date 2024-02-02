//imported libraries
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

//express app
const app = express()
app.use(bodyParser.json())

//SQLite database


//Product model
const Product = sequelize.define('product', {
    name: {type: Sequalize.STRING, allowNull: false},
    description: Sequelize.STRING,
    price: Sequalize.NUM
})

