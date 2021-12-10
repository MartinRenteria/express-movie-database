const { sequelize } = require("../db");
const { Movie } = require("./Movie");
const { Cast } = require("./Cast");
const { Crew } = require("./Crew");

Cast.belongsTo(Movie);
Movie.hasMany(Cast);

Crew.belongsTo(Movie);
Movie.hasMany(Crew);

module.exports = { Movie, Crew, Cast };