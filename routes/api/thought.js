const router = require('express').Router()
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
router.route('/:thoughtId/reactions').post(addReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router;