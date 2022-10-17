const Pet = require("../models/pet.model")

const getPets = (req, res) => {
    Pet.find({})
        .then((pets) => res.json(pets))
        .catch((err)=>res.status(400).json(err))
}

const getOne = (req,res) => {
    Pet.findById(req.params._id)
        .then((pet) => res.json(pet))
        .catch((err)=>res.status(400).json(err))
}

const createPet = (req, res) => {
    Pet.create(req.body)
        .then((newPet) => res.json(newPet))
        .catch((err)=>res.status(400).json(err))
}

const updatePet = (req, res) => {
    Pet.updateOne({_id:req.params._id}, req.body, {new:true, runValidators:true})
        .then((pet) => res.json(pet))
        .catch((err)=>res.status(400).json(err))
}

const deletePet = (req, res) => {
    Pet.remove({_id: req.params._id})
        .then((pet) => res.json(pet))
        .catch((err)=>res.status(400).json(err))
}

module.exports = {
    getPets,
    getOne,
    createPet,
    updatePet,
    deletePet
}

