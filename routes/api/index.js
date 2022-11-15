const router = require('express').Router()

const thoughtsRoute = require('./thought')
const usersRoute = require('./user')

router.use('/users', usersRoute)
router.use('/thoughts', thoughtsRoute)

module.exports = router