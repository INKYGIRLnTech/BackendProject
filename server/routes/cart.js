const express = require("express");
const router = express.Router();
const { addToCart, removeFromCart, calculateCartTotal } = require('../models/cartController');

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
 
