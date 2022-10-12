const Joke = require("../models/jokes.model")

const getAllJokes = (req, res) => {
    Joke.find()
        .then((jokes) => res.json(jokes))
        .catch((err) => console.log(err))
}

const getJokeID = (req,res) => {
    Joke.findById(req.params._id)
        .then((jokes) => res.json(jokes))
        .catch((err) => console.log(err))
}

const createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => res.json(newJoke))
        .catch((err)=>console.log(err))
}

const updateJoke = (req, res) => {
    Joke.updateOne({_id:req.params._id}, req.body)
        .then((jokes) => res.json(jokes))
        .catch((err)=>console.log(err))
}

const deleteJoke = (req, res) => {
    Joke.remove({_id: req.params._id})
        .then((jokes) => res.json(jokes))
        .catch((err)=>console.log(err))
}

module.exports = {
    getAllJokes,
    getJokeID,
    createJoke,
    updateJoke,
    deleteJoke
}