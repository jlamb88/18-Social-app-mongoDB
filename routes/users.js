const router = require('express').Router()
const {
    getUsers,
    getOneUser,
    createUser,
    editUser,
    deleteUser
} = require('../controllers')

router.route('/users').get(getUsers).post(createUser)
router.route('/users/:userId').get(getOneUser).put(editUser).delete(deleteUser)

module.exports = router;