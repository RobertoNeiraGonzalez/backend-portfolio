const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const User = connection.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  backgroundImage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  info: {
    type: DataTypes.STRING(2000),
    allowNull: true
  },
  media: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  socialmedia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  socialmedia2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role: {
    type: DataTypes.ENUM,
    values: ['user', 'admin'],
    defaultValue: 'admin'
  },
},
  {
    timestamps: false
  }
);


module.exports = User