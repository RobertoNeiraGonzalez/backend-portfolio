const User = require('../models/user.model')
const History = require('../models/history')

async function getAllHistories(req, res) {
  try {
    const history = await History.findAll(
      {
        where: req.query
      })
    if (history) {
      return res.status(200).json(history)
    } else {
      return res.status(404).send("No history found");
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOneHistory(req, res) {
  try {
    const history = await History.findByPk(req.params.id)

    if (history) {
      return res.status(200).json(history)
    } else {
      return res.status(404).send('History not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createOwnHistory(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const history = await History.create({
        history: req.body.history,
        image: req.body.image,
        userId: user.id
      })
      return res.status(200).json({ message: 'Tu historia ha sido creada', history })
    } else {
      return res.status(404).send('Historia no creada')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateOwnHistory(req, res) {
  try {
    const history = await History.findOne({
      where: {
        userId: res.locals.user.id,
        id: req.params.id
      }
    })
    if (history) {
      await history.update(req.body)
      return res.status(200).json({ message: 'Tu historia ha sido actualizada :)' })
    } else {
      return res.status(404).send('HIstoria no encontrada')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteHistory(req, res) {
  try {
    const history = await History.destroy({
      where: {
        id: req.params.id
      }
    })
    if (history) {
      return res.status(200).json(`Historia con Id ${req.params.id} eliminada`)
    } else {
      return res.status(404).send('Historia no encontrada')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllHistories,
  getOneHistory,
  createOwnHistory,
  updateOwnHistory,
  deleteHistory,
}