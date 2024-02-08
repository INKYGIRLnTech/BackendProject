const express = require("express");
const router = express.Router();
const { Product } = require("../models");

// create/add new product
router.post("/", async (req, res, next) => {
    try{
        const product = await Product.create(req.body)
        res.json(product)
    } catch(err) {
        next(err)
    }
});


// read/find products
router.get("/", async (req, res, next) => {
    try{
        
        const product = await Product.findAll()
        res.json(product)
    } catch(err) {
        next(err)
    }
});

//update products by ID
router.put("/:id", async (req, res, next) => {
    try{
        const id = req.params.id;
        const updatedProduct = await Product.update(req.body, {
            where: {id: id}
        })
        res.json(updatedProduct)
    } catch(err) {
        next(err)
    }
});

//delete a product
router.delete("/:id", async (req, res, next) => {
    try{
        const deleted = await Product.findByPk(req.params.id);
        await Product.destroy({
            where: {id: req.params.id}
        })
        res.json(deleted)
    } catch(err){
        next(err)
    }
});

module.exports = router;