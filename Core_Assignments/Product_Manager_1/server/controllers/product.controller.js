const Product = require("../models/product.model")

const getProducts = (req, res) => {
    Product.find()
        .then((products) => res.json(products))
        .catch((err) => console.log(err))
}

const createProduct = (req, res) => {
    Product.create(req.body)
        .then((results) => res.json(results))
        .catch((err)=>console.log(err))
}

module.exports = {
    getProducts,
    createProduct
}

