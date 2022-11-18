const { model, Schema, Types, isObjectIdOrHexString } = require('mongoose')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: { type: String, maxLength: 280, required: true },
        username: {
            type: String,
            ref: 'User',
            required: true
        },
        createdAt: { type: Date, default: Date.now }
    }
)

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, required: 'Enter your thought',
            minLength: 1, maxLength: 280
        },

        username: [{
            type: String,
            ref: 'User',
            required: true
        }],
        reactions: [reactionSchema],
        createdAt: { type: Date, default: Date.now },
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