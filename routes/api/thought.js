const router = require('express').Router()
const reactionRoute = require('./reaction')
const {
    getThoughts,
    getOneThought,
    addThought,
    editThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought')

router.route('/').get(getThoughts).post(addThought)
router.route('/:thoughtId').get(getOneThought).put(editThought).delete(removeThought)
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction)

module.exports = router;