const MovieController = require('../controllers/movies.controllers')

module.exports = (app) =>{
    //get all movies
    app.get('/api/allMovies', MovieController.getAllMovies)
    //get one movie
    app.get('/api/movie/:id', MovieController.getOneMovie)
    //create new movie
    app.post('/api/createMovie', MovieController.createMovie)
    //update movie
    app.put('/api/update/:id', MovieController.updateMovie)
    //delete movie
    app.delete('/api/delete/:id', MovieController.deleteMovie)
}


