const router = require('express').Router()

const thoughtsRoute = require('./thoughts')
const usersRoute = require('./users')
const friendsRoute = require('/friends')

router.use('/thoughts', thoughtsRoute)
router.use('/users', usersRoute)
router.use('/friends', friendsRoute)

module.exports = router