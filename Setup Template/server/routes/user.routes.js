const UserController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes", UserController.getUsers)
    app.get("/api/jokes/:_id", UserController.getUserID)
    app.post("/api/jokes", UserController.createUser)
    app.put("/api/jokes/:_id", UserController.updateUser)
    app.delete("/api/jokes/:_id", UserController.deleteUser)
}