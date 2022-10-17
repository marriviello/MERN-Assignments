const mongoose = require('mongoose');

//UPDATE PERSON TO NEW DB

mongoose.connect("mongodb://localhost/MERN_exam", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

