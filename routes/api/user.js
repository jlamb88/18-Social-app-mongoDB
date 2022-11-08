const router = require('express').Router()
const {
    getUsers,
    getOneUser,
    createUser,
    editUser,
    deleteUser
} = require('../../controllers')

const friendsRoute = require ('./friend')

router.route('/users').get(getUsers).post(createUser)
router.route('/users/:userId').get(getOneUser).put(editUser).delete(deleteUser)
router.use('/friends', friendsRoute)

module.exports = router;