const UserController = require('../controllers/user.controllers')

module.exports = (app) =>{
    app.get('/api/allUsers', UserController.addUser)
    app.post('/api/addUser', UserController.getAllUsers)
    app.get('/api/findById/:id', UserController.findById)
    app.delete('/api/deleteUser/:id', UserController.deleteUser)
    app.put('/api/update/:id', UserController.updateUser)
}


//can destructure functions
//const {addUser, getAllUsers} = controller