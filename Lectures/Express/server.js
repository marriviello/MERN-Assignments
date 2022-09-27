
const express = require('express')
const app = express()
const PORT = 8000

const {faker} = require('@faker-js/faker')

//to run server: 
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

//Middleware: always have to be here
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const createUser = () =>{
    return{
        _id:faker.datatype.uuid()
    }
}

app.get('/user',(req,res)=>{
    console.log(req)
    console.log(req.url,req.method)
    const user = createUser()
    res.json(user)
})

app.get('/user/:word',(req,res)=>{
    const word = req.params.word
    res.json(word)

    // const company = createCompany()
    // res.json(user)
})

app.post('/addUser',(req,res)=>{
    //post man body,raw,json
    console.log(req.body)
})