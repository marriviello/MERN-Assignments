const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamp: true})

const Joke = mongoose.model("Joke", JokesSchema)

module.exports = Joke;
