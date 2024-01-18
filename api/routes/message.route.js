const router = require('express').Router()

const {
  getAllMessages,
  updateMessage,
  deleteMessage
} = require('../controllers/message.controllers')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/me', checkAuth, checkAdmin, getAllMessages) 
router.put('/me', checkAuth, checkAdmin, updateMessage) 
router.delete('/me', checkAuth, checkAdmin, deleteMessage) 

module.exports = router