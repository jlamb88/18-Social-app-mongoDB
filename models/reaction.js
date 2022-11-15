const { Schema, Types } = require('mongoose')

const reactionSchema = new Schema(
    {
        reactionId:
        {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: { type: String, maxLength: 280, required: true },
        username: {
            type: String,
            ref: 'user',
            required: true
        },
        createdAt: { type: Date, default: Date.now }
    }
)

module.exports = reactionSchema