const {model, Schema, isObjectIdOrHexString} = require('mongoose')

const thought = new Schema (
    {thoughtText: {type:String, required: 'Enter you thought', 
        minLength: 1, maxLength: 280},
    createdAt: {type: Date, default: date.now},
    username: [{type: Schema.Types.username, 
                ref: 'user',
                required: true}],
    reactions: [reactionSchema]
    },
    {toJSON: {
        virtuals: true,
      },
      id: false,
    }
)

thoughtSchema
    .virtual(reactionCount)
    .get(function () {
        return this.reactions.length
    })

const reaction = new Schema (
    {reactionID: {type: ObjectId, default:},
    reactionBody: {type: String, maxLength: 280, required: true},
    username: [{type: Schema.Types.username,
            ref: 'user',
            required: true}],
    createdAt: {type: Date, default: date.now}
    }
)

const Thought = model('Thought',thoughtSchema)

const handleError = (err) => console.error(err)

module.exports = Thought