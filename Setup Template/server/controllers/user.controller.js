const User = require("../models/jokes.model")

const getUsers = (req, res) => {
    User.find()
        .then((user) => res.json(user))
        .catch((err) => console.log(err))
}

const getUserID = (req,res) => {
    User.findById(req.params._id)
        .then((user) => res.json(user))
        .catch((err) => console.log(err))
}

const createUser = (req, res) => {
    User.create(req.body)
        .then((newuser) => res.json(newuser))
        .catch((err)=>console.log(err))
}

const updateUser = (req, res) => {
    User.updateOne({_id:req.params._id}, req.body)
        .then((user) => res.json(user))
        .catch((err)=>console.log(err))
}

const deleteUser = (req, res) => {
    User.remove({_id: req.params._id})
        .then((user) => res.json(user))
        .catch((err)=>console.log(err))
}

module.exports = {
    getUsers,
    getUserID,
    createUser,
    updateUser,
    deleteUser
}

