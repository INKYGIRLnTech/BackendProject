const express = require("express");
const router = express.Router();
const { addToCart, removeFromCart, calculateCartTotal } = require('../models/index');





// Route to add a product to the cart
//http://localhost:3000/products/5/carts/8
router.post('/:productId/carts/:cartId', (req, res) => {
    try {
        const { productId, cartId } = req.params;
        addToCart(productId, cartId);
        res.status(200).send('Product added to cart');
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).send('Error adding product to cart');
    }
});

// Route to remove a product from the cart
router.delete('/:productId/carts/:cartId', (req, res) => {
    const { productId, cartId } = req.params;
    removeFromCart(productId, cartId);
    res.status(200).send('Product removed from cart');
});

// Route to calculate cart total
router.get('/cart/total', (req, res) => {
    const total = calculateCartTotal();
    res.status(200).json({ total });
});

module.exports = router;
 
