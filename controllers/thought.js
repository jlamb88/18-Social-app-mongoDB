const { User, Thought } = require('../models')

module.exports = {
    getOneThought(req, res) {
        Thought.FindOne({ _id: req.params.thoughtId })
            .then((thought) => {
                !thought ?
                    res.status(404).json({ msg: "No thought with that id" })
                    : res.json(thought)
            })
            .catch((err) => res.status(500).json(err))
    }
}

    // getThoughts (req,res) {
    //     Thought.Find
    // }
