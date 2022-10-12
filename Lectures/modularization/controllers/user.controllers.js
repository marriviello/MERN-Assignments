const User = require('../models/user.model')

const addUser = (req,res) => {
    User.create(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const getAllUsers = (req,res) => {
    User.find()
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const findById = (req,res) => {
    User.findById(req.params.id)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const deleteUser = (req,res) => {
    User.remove({_id:req.params.id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const updateUser = (req,res) => {
    User.updateOne({_id:req.params.id},req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports ={
    addUser,
    getAllUsers,
    findById,
    deleteUser,
    updateUser
}