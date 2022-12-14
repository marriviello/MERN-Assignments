const express = require('express')
const app = express()
const port = 8000

require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({extended: true}))

require("./server/routes/jokes.routes")(app)

app.listen(port, () => console.log(`The port is running on ${port}`))