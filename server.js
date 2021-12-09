const express = require('express');
const req = require('express/lib/request');
const { Movie, Crew, Cast } = require('./models')
const app = express()
const port = 3000

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//  CRUD routes for Movie modal 
app.get("/Movie", async (req, res) => {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
})

app.get("/Movie/:id", async (req, res) => {
    const moviesById = await Movie.findByPk(req.params.id)
    res.json(moviesById)
})

app.post("/Movie", async (req, res) => {
    await Movie.create(req.body)
    res.send("Thanks for adding a new Movie!")
    console.log("Thanks for adding a new Movie!")
})

app.put("/Movie/:id", async (req, res) => {
    await Movie.update(req.body, {
        where : {id : req.params.id}
    })
    res.send("Thanks for updating this Movie!")
    console.log("Thanks for updating this movie!")
})

app.delete('/Movie/:id', async (req, res) => {
    await Movie.destroy(
        {where : {id : req.params.id}}
    )
    res.send("Movie has been deleted")
    console.log("Movie has been deleted")
})
// CRUD routes for Crew Modal
app.get("/Crew", async (req, res) => {
    const allCrew = await Crew.findAll()
    res.json(allCrew)
})

// CRUD routes for Cast Modal 
app.get("/Cast", async (req, res) => {
    const allCast = await Cast.findAll()
    res.json(allCast)
})

app.listen(port, () => {console.log(`Server listening at http://localhost:${port}`)})