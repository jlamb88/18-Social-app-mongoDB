const { Schema, model, Types } = require('mongoose')

const userSchema = new Schema(
    {
        username: {
            type: String, required: 'Enter user name',
            unique: true, trim: true
        },
        email: {
            type: String, required: 'Enter your email',
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter valid e-mail']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })



const User = model('User', userSchema)

const handleError = (err) => console.error(err)

module.exports = User