const express = require("express");
const router = express.Router();
const { Product } = require("../models");

// create new product
router.post('/products', async (req, res) => {
    try{
        const {name, description, price} = req.body;
        const newProduct = await Product.create({name, description, price});
        res.status(201).json(newProduct);
    }catch(error){
        res.status(400).json({error: error.message})
    }
});

// read all products
router.get('/products', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
})

module.exports = router;