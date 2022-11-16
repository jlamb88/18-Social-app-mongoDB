const { model, Schema, isObjectIdOrHexString } = require('mongoose')
const Reaction = require('./reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, required: 'Enter your thought',
            minLength: 1, maxLength: 280
        },
        createdAt: { type: Date, default: Date.now },
        username: [{
            type: String,
            ref: 'user',
            required: true
        }],
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length
    })

const Thought = model('Thought', thoughtSchema)

const handleError = (err) => console.error(err)

module.exports = Thought