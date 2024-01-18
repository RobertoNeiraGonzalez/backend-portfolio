const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Background = connection.define("background", {
  Category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  years: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  info: {
    type: DataTypes.STRING(2000),
    allowNull: true,
  },
},
  {
    timestamps: false
  }
);

module.exports = Background