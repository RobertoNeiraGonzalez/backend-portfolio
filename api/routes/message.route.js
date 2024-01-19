const router = require('express').Router()

const { create } = require('domain')
const {
  getAllMessages,
  getOneMessage,
  createOwnMessage,
  updateMessage,
  deleteMessage
} = require('../controllers/message.controllers')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/', checkAuth, checkAdmin, getAllMessages) 
router.get('/:id', checkAuth, checkAdmin, getOneMessage) 
router.post('/', checkAuth, checkAdmin, createOwnMessage) 
router.put('/:id', checkAuth, checkAdmin, updateMessage) 
router.delete('/:id', checkAuth, checkAdmin, deleteMessage) 

module.exports = router