const User = require('../models/user.model')
const Background = require('../models/background')

async function getAllBackground(req, res) {
  try {
    const background = await Background.findAll(
      {
        where: req.query
      })
    if (background) {
      return res.status(200).json(background)
    } else {
      return res.status(404).send("No background found");
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOwnBackground(req, res) {
  try {
    const background = await Background.findAll({
      where: {
        userId: res.locals.user.id
      },
      include: [{ model: User }]
    })
    if (background.length !== 0) {
      return res.status(200).json({ message: 'Este es tu background', background })
    } else {
      return res.status(404).send('Todavia no tienes un background')
    }
  } catch (error) {
    res.json(error)
  }
}

async function createOwnBackground(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const background = await Background.create(req.body)
      await background.setUser(user)
      return res.status(200).json({ message: 'Tu background ha sido añadido correctamente' })
    } else {
      return res.status(404).send('No se ha podido crear tu background')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateOwnBackground(req, res) {
  try {
    const background = await Background.findOne({
      where: {
        userId: res.locals.user.id,
        id: req.params.id
      }
    })
    if (background) {
      await background.update(req.body)
      return res.status(200).json({ message: "Background Actualizado" })
    } else {
      return res.status(404).send('Background no encontrada')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteOwnBackground(req, res) {
  try {
    const background = await Background.destroy({
      where: {
        userId: res.locals.user.id,
        id: req.params.id
      }
    })
    if (background) {
      return res.status(200).json({ message: "Tu background ha sido eliminado correctamente" })
    } else {
      return res.status(404).send('No se ha podido eliminar tu background')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllBackground,
  getOwnBackground,
  createOwnBackground,
  updateOwnBackground,
  deleteOwnBackground
}