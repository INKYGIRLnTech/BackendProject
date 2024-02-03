const express = require("express");
const router = express.Router();

//define the product route
router.use("/products", require("./products"));

module.exports = router;