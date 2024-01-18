const router = require('express').Router()

const {
  getOneHistory,
  createOwnHistory,
  updateOwnHistory,
  deleteHistory,
} = require('../controllers/history.controllers')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/me', checkAuth, checkAdmin, getOneHistory) 
router.post('/me', checkAuth, checkAdmin, createOwnHistory)
router.put('/me', checkAuth, checkAdmin, updateOwnHistory) 
router.delete('/me', checkAuth, checkAdmin, deleteHistory) 


module.exports = router