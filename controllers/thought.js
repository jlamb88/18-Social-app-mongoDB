const { Thought, User } = require('../models')

module.exports = {
    getOneThought(req, res) {
        Thought.findById(req.params.thoughtId)
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
            .then(async (thought) => {
                await User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true })
            })
            .then(() => res.json({ msg: `Thought added to database` })
            )
            .catch((err) => res.status(500).json(err))
    },
    removeThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then(() => res.json({ msg: 'Thought deleted successfully' }))
            .catch((err) => res.status(500).json(err))
    },

    editThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { validators: true, new: true })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err))
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { validators: true, new: true })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ msg: 'No thought found' })
                    : res.json({ msg: 'Reaction added' }))
            .catch((err) => res.status(500).json(err))
    },

    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.ThoughtId },
            { $pull: { reactions: req.params.reactionId } },
            { validators: true, new: true })
            .then(() => res.json({ msg: 'Reaction deleted' }))
            .catch((err) => res.status(500).json(err))
    }
}
