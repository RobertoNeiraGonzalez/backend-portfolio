const User = require('../api/models/user.model')
const Background = require('../api/models/background')
const History = require('../api/models/history')
const Message = require('../api/models/message')
const Project = require('../api/models/projects')



function addRelationsToModels() {
  try {
    User.hasMany(Message)
    Message.belongsTo(User)

    User.hasMany(Project)
    Project.belongsTo(User)

    User.hasMany(Background)
    Background.belongsTo(User)

    User.hasOne(History)
    History.belongsTo(User)

  } catch (error) {
    throw error
  }
}

module.exports = { addRelationsToModels }