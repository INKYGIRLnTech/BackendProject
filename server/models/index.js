const {Sequelize} = require('sequelize');
const {sequelize} = require('../db')

//define Product model
const Product = sequelize.define("products", {
    name: Sequelize.STRING,
    description: Sequelize.STRING, 
    price: {
        type: Sequelize.NUMERIC,
        allowNull: false,
    }
});

const User = sequelize.define("users", {
    email: Sequelize.STRING,
    password: Sequelize.STRING, 
    role: {
        type: Sequelize.STRING,
        defaultValue: 'user'
    }
});



//define CartItem model
const CartItem = sequelize.define('CartItem', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

//define Cart model
const Cart = sequelize.define('Cart', {});



CartItem.belongsTo(Cart);
Cart.hasMany(CartItem);
CartItem.belongsTo(Product);

// function to add product to cart 
function addToCart(productId, cartId) {

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findByPk(item => item.productId === product.productId);

    if (existingProductIndex !== -1) {
        // If the product already exists, increment the quantity
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        // Otherwise, add the product to the cart
        cart.push(product);
    }
};

// function to remove product from cart
function removeFromCart(productId) {

    //Find the index of the product in the cart
    const productIndex = cart.findByPk(item => item.productId === productId);

    if (productIndex !== -1) {
        // Remove if the product exists in the cart
        cart.splice(productIndex, 1);
    }
};

function calculateCartTotal() {
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }

    return total;
};

module.exports = {
    db: sequelize,
    Product,
    User,
    CartItem,
    Cart,
    addToCart,
    removeFromCart,
    calculateCartTotal
};