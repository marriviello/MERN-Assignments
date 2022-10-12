const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testdb2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res)=>{
    console.log('Successfully connected to db')
}).catch((err)=>{
    console.log('Something went wrong')
})