var express = require('express');
var router = express.Router();
const req = require('express/lib/request');
const { Movie, Crew, Cast } = require('../models')

//  CRUD routes for Movie modal 
router.get("/Movie", async (req, res) => {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
})

router.get("/Movie/:id", async (req, res) => {
    const moviesById = await Movie.findByPk(req.params.id)
    res.json(moviesById)
})

router.post("/Movie", async (req, res) => {
    await Movie.create(req.body)
    res.send("Thanks for adding a new Movie!")
    console.log("Thanks for adding a new Movie!")
})

router.put("/Movie/:id", async (req, res) => {
    await Movie.update(req.body, {
        where : {id : req.params.id}
    })
    res.send("Thanks for updating this Movie!")
    console.log("Thanks for updating this movie!")
})

router.delete('/Movie/:id', async (req, res) => {
    await Movie.destroy(
        {where : {id : req.params.id}}
    )
    res.send("Movie has been deleted")
    console.log("Movie has been deleted")
})
// CRUD routes for Crew Modal
router.get("/Crew", async (req, res) => {
    const allCrew = await Crew.findAll()
    res.json(allCrew)
})

router.get("/Crew/:id", async (req, res) => {
    const crewById = await Crew.findByPk(req.params.id)
    res.json(crewById)
})

router.post("/Crew", async (req, res) => {
    await Crew.create(req.body)
    res.send("Thanks for adding a new Crew!")
    console.log("Thanks for adding a new Crew!")
})

router.put("/Crew/:id", async (req, res) => {
    await Crew.update(req.body, {
        where : {id : req.params.id}
    })
    res.send("Thanks for updating this Crew!")
    console.log("Thanks for updating this Crew!")
})

router.delete('/Crew/:id', async (req, res) => {
    await Crew.destroy(
        {where : {id : req.params.id}}
    )
    res.send("Crew has been deleted")
    console.log("Crew has been deleted")
})

// CRUD routes for Cast Modal 
router.get("/Cast", async (req, res) => {
    const allCast = await Cast.findAll()
    res.json(allCast)
})

router.get("/Cast/:id", async (req, res) => {
    const castById = await Cast.findByPk(req.params.id)
    res.json(castById)
})

router.post("/Cast", async (req, res) => {
    await Cast.create(req.body)
    res.send("Thanks for adding a new Cast!")
    console.log("Thanks for adding a new Cast!")
})

router.put("/Cast/:id", async (req, res) => {
    await Cast.update(req.body, {
        where : {id : req.params.id}
    })
    res.send("Thanks for updating this Cast!")
    console.log("Thanks for updating this Cast!")
})

router.delete('/Cast/:id', async (req, res) => {
    await Cast.destroy(
        {where : {id : req.params.id}}
    )
    res.send("Cast has been deleted")
    console.log("Cast has been deleted")
})

module.exports = router;