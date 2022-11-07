const router = require('express').Router()
const {
    getFriends,
    getOneFriend,
    deleteFriend,
} = require('../controllers')

router.route('/user/:userId/friends').get(getFriends)
router.route('/user/:userId/friends/:friendId').get(getOneFriend).delete(deleteFriend)

module.exports = router;