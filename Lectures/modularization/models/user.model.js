const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    developer: Boolean
})

const User = mongoose.model('User', UserSchema)

model.exports = User