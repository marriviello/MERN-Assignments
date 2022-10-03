const express = require('express')
const faker = require('@faker-js/faker')
const app = express()
const PORT=8000


const userObj = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber:faker.phone.phoneNumber(),
    email:faker.internet.email(),
    password: faker.internet.password()
})

console.log(userObj());

const companyObj = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    },
})

app.get("/api/users/new", (req,res)=>{
    const newUser = userObj();
    res.json(newUser)
}) 

app.get("/api/companies/new", (req,res)=>{
    const newCompany = companyObj();
    res.json(newCompany)
}) 

app.get("/api/user/company", (req,res)=>{
    const newUser = userObj();
    const newCompany = companyObj();
    const response = {
        user: newUser,
        company: newCompany
    }
    res.json(response);
}) 

app.use(express.json)
app.use(express.urlencoded({extended:true}))

app.listen(PORT,()=>{
    console.log(`Server is up on ${PORT}`)
})