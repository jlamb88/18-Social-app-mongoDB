const Users = require('../models/users')

module.exports = {
getUsers(req, res) {
    Users.find()
    .then((users) => res.json(users))
    .catch((err)=> res.status(500).json(err))
},
getOneUser(req,res) {
    Users.findOne({_id: req.params.userId})
    .select('-__v')
    .then((user)=> 
    !user
        ? res.status(404).json({message: 'No user found with that ID'})
        : res.json(user))
    .catch((err)=> res.status(500).json(err))
},
createUser(req,res) {
    Users.create(req.body)
    .then((userData) => res.json(userData))
    .catch((err)=> res.status(500).json(err))

}
}
