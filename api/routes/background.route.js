const router = require('express').Router()

const {
  getAllBackground,
  getOwnBackground,
  createOwnBackground,
  updateOwnBackground,
  deleteOwnBackground
} = require('../controllers/background.controller')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/', checkAuth, checkAdmin, getAllBackground) 
router.get('/me', checkAuth, checkAdmin, getOwnBackground) 
router.post('/me', checkAuth, checkAdmin, createOwnBackground)
router.put('/me/:id', checkAuth, checkAdmin, updateOwnBackground) 
router.delete('/me/:id', checkAuth, checkAdmin, deleteOwnBackground) 

module.exports = router