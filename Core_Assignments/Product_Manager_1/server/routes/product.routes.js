const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products", ProductController.getProducts)
    app.post("/api/products", ProductController.createProduct)
}