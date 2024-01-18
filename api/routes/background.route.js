const router = require('express').Router()

const {
  getOwnBackground,
  createOwnBackground,
  updateOwnBackground,
  deleteOwnBackground
} = require('../controllers/background.controller')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/me', checkAuth, checkAdmin, getOwnBackground) 
router.post('/me', checkAuth, checkAdmin, createOwnBackground)
router.put('/me', checkAuth, checkAdmin, updateOwnBackground) 
router.delete('/me', checkAuth, checkAdmin, deleteOwnBackground) 

module.exports = router