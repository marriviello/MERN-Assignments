const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products", ProductController.getProducts)
    app.post("/api/products", ProductController.createProduct)
    app.get("/api/product/:_id", ProductController.getOneProduct)
    app.put("/api/product/edit/:_id", ProductController.updateProduct)
    app.delete("/api/product/delete/:_id", ProductController.deleteProduct)
}