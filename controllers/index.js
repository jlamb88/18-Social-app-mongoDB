const router = require('express').Router();
const userControls = require('./user')
const thoughtControls = require('./thought')

router.use('/users', userControls)
router.use('/thoughts', thoughtControls)

module.exports = router;