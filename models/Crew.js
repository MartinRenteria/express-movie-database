const { sequelize } = require("../db");
const { DataTypes, Model } = require("sequelize");

class Crew extends Model {}

Crew.init(
  {
    director: DataTypes.STRING
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Crew };
