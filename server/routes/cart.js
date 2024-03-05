const express = require("express");
const router = express.Router();
const { addToCart, removeFromCart, calculateCartTotal } = require('../models/cartController');
const { CartItem, Cart } = require('../models');

const cart = [
];

// function to add product to cart 
function addToCart(product) {

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

// function to remove product from cart
function removeFromCart(productId) {

    //Find the index of the product in the cart
    const productIndex = cart.findIndex(item => item.productId === productId);

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



// Route to add a product to the cart
router.post('/cart/add', (req, res) => {
    const { productId, quantity } = req.body;
    addToCart({ productId, quantity });
    res.status(200).send('Product added to cart');
});

// Route to remove a product from the cart
router.delete('/cart/remove/:productId', (req, res) => {
    const { productId } = req.params;
    removeFromCart(productId);
    res.status(200).send('Product removed from cart');
});

// Route to calculate cart total
router.get('/cart/total', (req, res) => {
    const total = calculateCartTotal();
    res.status(200).json({ total });
});

module.exports = router;
 
