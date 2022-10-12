const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    director:{
        type:String
    },
    rating:{
        enum: ['G', 'PG', 'PG-13', 'R', 'NC-17']
    },
    genre:{
        type:String,
        enum: [
            'Comedy',
            'Drama',
            'Horror',
            'Romcom',
            'Thriller',
            'Fantasy',
            'Animated'
        ]
    },
    releaseYear:{
        type:Number
    },
    duration:{
        type:String
    },
    boxArt:{
        type:String
    }
}, {timestamps:true})

//pass in singular collection name (movie vs. movies)
const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie