const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../db')

//define Product model
const Product = sequelize.define("products", {
    name: Sequelize.STRING,
    description: Sequelize.STRING, 
    price: {
        type: DataTypes.NUMERIC,
        allowNull: false,
    }
});

module.exports = {
    db: sequelize,
    Product
};