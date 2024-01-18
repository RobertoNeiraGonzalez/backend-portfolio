const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const History = connection.define("history", {
  history: {
    type: DataTypes.STRING(2000),
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
},
  {
    timestamps: false
  }
);

module.exports = History