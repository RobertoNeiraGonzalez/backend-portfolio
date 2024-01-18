const router = require('express').Router()

const {
  getOwnProfile,
  updateOwnProfile,
  deleteOwnProfile,
  changePassword
} = require('../controllers/user.controllers')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/me', checkAuth, checkAdmin, getOwnProfile) 
router.put('/me', checkAuth, checkAdmin, updateOwnProfile) 
router.put('/password', checkAuth, checkAdmin, changePassword)
router.delete('/me', checkAuth, checkAdmin, deleteOwnProfile) 

module.exports = router