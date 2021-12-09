const { sequelize } = require("./db");
const { Movie, Crew, Cast } = require("./models");

const seedMovie = [
    {
        title: "Spider-Man: No Way Home"
    },
    {
        title: "Demon Slayer: Mugen Train"
    }
]

const seedCrew = [
    {
        director: "Jon Watts"
    },
    {
        director: "Haruo Sotozaki"
    }
]

const seedCast = [
    {
        name: "Tom Holland",
        role: "Spider-Man"
    },
    {
        name: "Tanjiro",
        role: "Protagonist"
    }
]

const seed = async () => {
    try {
      await sequelize.sync({ force: true });
      await Movie.bulkCreate(seedMovie, { validate: true });
      await Crew.bulkCreate(seedCrew, { validate: true });
      await Cast.bulkCreate(seedCast, { validate: true });
      console.log("Seeding success!");
      sequelize.close();
    } catch (error) {
      console.log("SOMETHING WENT WRONG WITH THE SEEDING: ", error);
    }
  };
  
  seed()
    .then(() => {
      console.log("Seeding success!");
    })
    .catch((err) => {
      console.error("Oh noes! Something went wrong!");
      console.error(err);
    });