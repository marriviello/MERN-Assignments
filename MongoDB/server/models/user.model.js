const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

//creates collection
const User = mongoose.model('User', UserSchema);

module.exports = User;
