const router = require('express').Router()

const {
  getAllHistories,
  getOneHistory,
  createOwnHistory,
  updateOwnHistory,
  deleteHistory,
} = require('../controllers/history.controllers')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/', checkAuth, checkAdmin, getAllHistories) 
router.get('/me', checkAuth, checkAdmin, getOneHistory) 
router.post('/me', checkAuth, checkAdmin, createOwnHistory)
router.put('/me/:id', checkAuth, checkAdmin, updateOwnHistory) 
router.delete('/me/:id', checkAuth, checkAdmin, deleteHistory) 


module.exports = router