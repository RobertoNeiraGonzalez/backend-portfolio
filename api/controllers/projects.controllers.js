const User = require('../models/user.model')
const Project = require('../models/projects')

async function getOwnProject(req, res) {
  try {
    const project = await Project.findAll({
      where: {
        userId: res.locals.user.id
      },
      include: [{ model: User }]
    })
    if (project.length !== 0) {
      return res.status(200).json({ message: 'Este es tu project', project })
    } else {
      return res.status(404).send('Todavia no tienes un project')
    }
  } catch (error) {
    res.json(error)
  }
}

async function createOwnProject(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const project = await Project.create(req.body)
      await project.setUser(user)
      return res.status(200).json({ message: 'Tu project ha sido añadido correctamente' })
    } else {
      return res.status(404).send('No se ha podido crear tu project')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateOwnProject(req, res) {
  try {
    const project = await Project.findOne({
      where: {
        userId: res.locals.user.id,
        id: req.params.id
      }
    })
    if (project) {
      await project.update(req.body)
      return res.status(200).json({ message: "project Actualizado" })
    } else {
      return res.status(404).send('project no encontrada')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteOwnProject(req, res) {
  try {
    const project = await Project.destroy({
      where: {
        userId: res.locals.user.id,
        id: req.params.id
      }
    })
    if (project) {
      return res.status(200).json({ message: "Tu project ha sido eliminado correctamente" })
    } else {
      return res.status(404).send('No se ha podido eliminar tu project')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getOwnProject,
  createOwnProject,
  updateOwnProject,
  deleteOwnProject
}