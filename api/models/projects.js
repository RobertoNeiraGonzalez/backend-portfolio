const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Project = connection.define('project',
  {
    nameProject: {
      type: DataTypes.STRING,
      allowNull: true
    },
    info: {
      type: DataTypes.STRING(3000),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
)

module.exports = Project