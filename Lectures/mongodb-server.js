const express = require('express')
const mongoose = require('mongoose') //library of functions used to talk to mongodb
const app = express()
const PORT = 8000

//allow us to add post data into our request (middlewear)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//connects to database 'testdb2' if it doesn't exist, it creates
mongoose.connect('mongodb://localhost/testdb2', ()=>{
    console.log(`Connected to MongoDB`)

})

//MongoDB Schema -> MongoDB Model

//create schema
const UsersSchema = mongoose.Schema({
    name: String,
    age: Number,
    developer: Boolean
})

//pass schema to model and create collectioins
const User = mongoose.model('User', UsersSchema)

app.post('/api/addUser', (req,res)=>{
    User.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
})

app.get('/api/allUsers', (req,res)=>{
    User.find()
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
})



app.listen(PORT,()=>{
    console.log(`server is up and running on ${PORT}`)
})


//folder structure:
// config - connection to mongodb
// routes - list of all endpoint paths
// controllers - functions for endpoints
// models - individual files for each collection