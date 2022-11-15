const router = require('express').Router()
const {
    addFriend,
    removeFriend
} = require('../../controllers')

router.route('/:friendId').post(addFriend).delete(removeFriend)

module.exports = router