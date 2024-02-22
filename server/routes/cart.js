const express = require("express");
const router = express.Router();

const cart = [];

// function to add product to cart 
addToCart(product) {

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.productId === product.productId);

    if (existingProductIndex !== -1) {
        // If the product already exists, increment the quantity
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        // Otherwise, add the product to the cart
        cart.push(product);
    }
};



module.exports = router;