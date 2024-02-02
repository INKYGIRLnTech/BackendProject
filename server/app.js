//imported libraries
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

//express app
const app = express()
app.use(bodyParser.json())

//SQLite database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'products.db'
})

//Product model
const Product = sequelize.define('product', {
    name: {type: Sequalize.STRING, allowNull: false},
    description: Sequelize.STRING,
    price: Sequalize.NUM
})

