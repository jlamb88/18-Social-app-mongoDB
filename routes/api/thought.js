const router = require('express').Router()
const reactionRoute = require('./reaction')
const {
    getThoughts,
    getOneThought,
    addThought,
    editThought,
    removeThought } = require('../../controllers')

router.route('/').get(getThoughts).post(addThought)

router.route('/:thoughtId').get(getOneThought).post(addThought).put(editThought).delete(removeThought)

router.use('/:thoughtId/reactions', reactionRoute)

module.exports = router;