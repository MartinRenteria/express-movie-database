const { sequelize } = require("../db");
const { Movie, Cast, Crew } = require("../models");

describe("Movie Database", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  describe("Movie Model", () => {
    test("Adding a movie to our database", async () => {
      const newMovie = await Movie.create({ title: "Spider-Man: No Way Home" });
      expect(newMovie.title).toBe("Spider-Man: No Way Home");
    });
  });

  describe("Cast Model", () => {
    test("Adding a cast member to our database", async () => {
      const newCast = await Cast.create({
        name: "Tom Holland",
        role: "Spiderman",
      });
      expect(newCast.name).toBe("Tom Holland");
    });
  });

  describe("Crew", () => {
    test("Adding a crew member to our database", async () => {
      const newCrew = await Crew.create({ director: "Jon Watts" });
      expect(newCrew.director).toBe("Jon Watts");
    });
  });

  describe("Movie associations", () => {
    test("Movies can have many Casts", async () => {
      // Creates a test instance of Movie
      const SpiderMan = await Movie.create({
        title: "My Hero Academia: World Heroes Mission",
      });
      // Creates 3 instances of Cast
      const Daiki = await Cast.create({ name: "Daiki", role: "Midoriya" });
      const Nobuhiko = await Cast.create({ name: "Nobuhiko", role: "Bakugo" });
      const Yuki = await Cast.create({ name: "Yuki", role: "Todoroki" });
      //Add test Casts to test Movie
      await SpiderMan.addCast(Daiki);
      await SpiderMan.addCast(Nobuhiko);
      await SpiderMan.addCast(Yuki);
      // Retrieves list of Casts in this Movie
      const Casts = await SpiderMan.getCasts();
      // Assert that the 0th instance is indeed an instance, which should return true
      expect(Casts.length).toBe(3);
      expect(Casts[0] instanceof Cast).toBeTruthy;
    });

    test("Movies can have many Crews", async () => {
      // Creates a test instance of Movie
      const Totoro = await Movie.create({
        title: "Totoro",
      });
      // Creates a instance of Cast
      const Hayao = await Crew.create({ director: "Hayao", writer: "Hayao" });
 
      //Add test Casts to test Movie
      await Totoro.addCrew(Hayao);
      // Retrieves list of Casts in this Movie
      const Crews = await Totoro.getCrews();
      // Assert that the 0th instance is indeed an instance, which should return true
      expect(Crews.length).toBe(1);
      expect(Crews[0] instanceof Crew).toBeTruthy;
    });
  });

  afterAll(async () => {
    // await sequelize.sync({force:true})
    sequelize.close();
  });
});
