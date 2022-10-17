const PetController = require("../controllers/pet.controller")

module.exports = app => {
    app.get("/api/pets", PetController.getPets)
    app.get("/api/pet/:_id", PetController.getOne)
    app.post("/api/pet/create", PetController.createPet)
    app.put("/api/pet/edit/:_id", PetController.updatePet)
    app.delete("/api/pet/delete/:_id", PetController.deletePet)
}