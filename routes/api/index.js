const router = require('express').Router()

// const thoughtsRoute = require('./thought')
const usersRoute = require('./user')
const friendsRoute = require('./friend')

router.use('/users', usersRoute)
// router.use('/thoughts', thoughtsRoute)
router.use('/users/:userid/friends', friendsRoute)

module.exports = router;