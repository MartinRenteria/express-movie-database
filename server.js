const express = require('express')
const { Movie, Crew, Cast } = require('./models')
const app = express()
const port = 3000

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get("/Movie", async (req, res) => {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
})

app.get("/Crew", async (req, res) => {
    const allCrew = await Crew.findAll()
    res.json(allCrew)
})

app.get("/Cast", async (req, res) => {
    const allCast = await Cast.findAll()
    res.json(allCast)
})

app.listen(port, () => {console.log(`Server listening at http://localhost:${port}`)})