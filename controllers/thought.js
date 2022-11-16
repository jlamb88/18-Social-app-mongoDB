const { Thought } = require('../models')

module.exports = {
    getOneThought(req, res) {
        console.log('req', req.params)
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) => {
                !thought ?
                    res.status(404).json({ msg: "No thought with that id" })
                    : res.json(thought)
            })
            .catch((err) => res.status(500).json(err))
    },
    getThoughts(req, res) {
        Thought.find()
            .select('-__v')
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err))
    },
    addThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err))
    },
    removeThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then(() => res.json({ msg: 'Thought deleted successfully' }))
            .catch((err) => res.status(500).json(err))
    },

    editThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.ThoughtId },
            { $set: req.body },
            { validators: true, new: true })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err))
    },
    addReaction(req, res) {
        console.log("body", req.body)
        console.log("param", req.params)
        Thought.findOneAndUpdate(
            { _id: req.params.ThoughtId },
            { $addToSet: { reaction: req.body } },
            { runValidators: true, new: true })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ msg: 'No thought found' })
                    : res.json(thought))
            .catch((err) => res.status(500).json(err))
    },

    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.ThoughtId },
            { $pull: { friends: req.params.reactionId } },
            { validators: true, new: true })
            .then(() => res.json({ msg: 'Reaction deleted' }))
            .catch((err) => res.status(500).json(err))
    }
}
