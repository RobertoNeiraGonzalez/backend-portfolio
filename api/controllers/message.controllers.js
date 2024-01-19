const User = require('../models/user.model')
const Message = require('../models/message')

async function getAllMessages(req, res) {
  try {
    const message = await Message.findAll(
      {
        where: req.query
      })
    if (message) {
      return res.status(200).json(message)
    } else {
      return res.status(404).send("No tiene mensajes");
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOneMessage(req, res) {
  try {
    const message = await Message.findByPk(req.params.id)

    if (message) {
      return res.status(200).json(message)
    } else {
      return res.status(404).send('message not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


async function createOwnMessage(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const message = await Message.create({
        nameAuthor: req.body.nameAuthor,
        email: req.body.email,
        message: req.body.message,
        answer: req.body.answer,
        userId: user.id
      })
      return res.status(200).json({ message: 'Tu mensaje ha sido creado', message })
    } else {
      return res.status(404).send('Mensaje no creado')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateMessage(req, res) {
  try {
    const message = await Message.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (message) {
      return res.status(200).json({ message: `Mensaje on ID ${req.params.id} ha sido actualizado` })
    } else {
      return res.status(404).send('Mensaje no encontrado')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteMessage(req, res) {
  try {
    const message = await Message.destroy({
      where: {
        id: req.params.id
      }
    })
    if (message) {
      return res.status(200).json(`Mensaje con Id ${req.params.id} eliminado`)
    } else {
      return res.status(404).send('Mensaje no encontrado')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllMessages,
  getOneMessage,
  createOwnMessage,
  updateMessage,
  deleteMessage
}