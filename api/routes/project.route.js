const router = require('express').Router()

const {
  getOwnProject,
  createOwnProject,
  updateOwnProject,
  deleteOwnProject
} = require('../controllers/projects.controllers')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/me', checkAuth, checkAdmin, getOwnProject) 
router.post('/me', checkAuth, checkAdmin, createOwnProject)
router.put('/me', checkAuth, checkAdmin, updateOwnProject) 
router.delete('/me', checkAuth, checkAdmin, deleteOwnProject) 


module.exports = router