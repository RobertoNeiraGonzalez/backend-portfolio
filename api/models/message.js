const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Message = connection.define('message',
  {
    nameAuthor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255],
      },
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 255],
      },
    },
  },
  { timestamps: false }
)

module.exports = Message