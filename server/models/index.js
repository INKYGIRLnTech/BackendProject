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

//define CartItem model
const CartItem = sequelize.define('CartItem', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

//define Cart model
const Cart = sequelize.define('Cart', {

});

CartItem.belongsTo(Cart);
Cart.hasmany(CartItem);
CartItem.belongsTo(Product);

module.exports = {
    db: sequelize,
    Product,
    CartItem,
    Cart
};