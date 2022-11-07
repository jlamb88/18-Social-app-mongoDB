const router = requires('express').Router()
const {getThoughts, getOneThought, addThought, editThought, removeThought} = require('../controllers')

router.route('/:userId/thoughts').get(getThoughts).post(addThought)

router.route('/:userId/thoughts/:thoughtId').get(getOneThought).put(editThought).delete(removeThought)

module.exports = router;