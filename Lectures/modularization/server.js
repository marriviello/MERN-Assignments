const express = require('express')
const mongoose = require('mongoose') //library of functions used to talk to mongodb
const userRoutes = require('./routes/user.routes')
const app = express()
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./config/mongoose.config')

const UserRoute = require('./routes/user.routes')
userRoutes(app)

app.listen(PORT,()=>{
    console.log(`server is up and running on ${PORT}`)
})