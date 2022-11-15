const { User } = require('../models')

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that ID' })
                    : res.json(user))
            .catch((err) => res.status(500).json(err))
    },
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err))
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then(() => res.json({ msg: 'User deleted successfully' }))
            .catch((err) => res.status(500).json(err))
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { validators: true, new: true })
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err))
    },
    addFriend(req, res) {
        console.log("body", req.body)
        console.log("param", req.params)
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true })
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err))
    },


    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { validators: true, new: true })
            .then((userData) => res.json({ msg: 'Friend deleted' }))
            .catch((err) => res.status(500).json(err))
    }
}