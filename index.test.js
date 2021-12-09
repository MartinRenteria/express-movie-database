const {sequelize} = require("./db");
const {Movie, Cast, Crew} = require("./models")

describe('Movie Database', () => {
	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

describe('Movie Model', () => {

    test('Adding a movie to our database', async () => {
        const newMovie = await Movie.create({title: "Spider-Man: No Way Home"})
        expect(newMovie.title).toBe('Spider-Man: No Way Home')
    })
})

describe('Cast Model', () => {

    test('Adding a cast member to our database', async () => {
        const newCast = await Cast.create({name: "Tom Holland", role: "Spiderman"})
        expect(newCast.name).toBe('Tom Holland')
    })
})

describe('Crew', () => {

    test('Adding a crew member to our database', async () => {
        const newCrew = await Crew.create({director: "Jon Watts"})
        expect(newCrew.director).toBe("Jon Watts")
    })
}) 

    afterAll(async()=> {
        // await sequelize.sync({force:true})
        sequelize.close()
    })

})