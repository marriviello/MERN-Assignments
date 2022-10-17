const Product = require("../models/product.model")

const getProducts = (req, res) => {
    Product.find({})
        .then((products) => res.json(products))
        .catch((err)=>res.status(400).json(err))
}

const createProduct = (req, res) => {
    Product.create(req.body)
        .then((results) => res.json(results))
        .catch((err)=>res.status(400).json(err))
}

const getOneProduct = (req, res) => {
    console.log(req.params)
    Product.findById(req.params._id)
        .then((results) => {
            console.log(results)
            res.json(results)})
        .catch((err)=>res.status(400).json(err))
}

const updateProduct = (req, res) => {
    Product.updateOne({_id:req.params._id}, req.body, {new:true, runValidators:true})
        .then((result) => res.json(result))
        .catch((err)=>res.status(400).json(err))
}

const deleteProduct = (req, res) => {
    Product.remove({_id: req.params._id})
        .then((result) => res.json(result))
        .catch((err)=>res.status(400).json(err))
}

module.exports = {
    getProducts,
    createProduct,
    getOneProduct,
    updateProduct,
    deleteProduct
}

