const JokeController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes", JokeController.getAllJokes)
    app.get("/api/jokes/:_id", JokeController.getJokeID)
    app.post("/api/jokes", JokeController.createJoke)
    app.put("/api/jokes/:_id", JokeController.updateJoke)
    app.delete("/api/jokes/:_id", JokeController.deleteJoke)
}