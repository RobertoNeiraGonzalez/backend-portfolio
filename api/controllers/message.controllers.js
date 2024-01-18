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
  updateMessage,
  deleteMessage
}