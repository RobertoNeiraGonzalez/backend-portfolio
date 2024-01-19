const router = require('express').Router()

const {
  getAllProject,
  getOwnProject,
  createOwnProject,
  updateOwnProject,
  deleteOwnProject
} = require('../controllers/projects.controllers')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/', checkAuth, checkAdmin, getAllProject) 
router.get('/me', checkAuth, checkAdmin, getOwnProject) 
router.post('/', checkAuth, checkAdmin, createOwnProject)
router.put('/:id', checkAuth, checkAdmin, updateOwnProject) 
router.delete('/:id', checkAuth, checkAdmin, deleteOwnProject) 


module.exports = router