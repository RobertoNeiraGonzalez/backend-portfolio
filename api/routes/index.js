const router = require('express').Router()

router.use('/auth', require('./auth.route'))
router.use('/user', require('./user.route'))
router.use('/background', require('./background.route'))
router.use('/message', require('./message.route'))
router.use('/history', require('./history.route'))
router.use('/project', require('./project.route'))

module.exports = router