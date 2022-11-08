const {connect, connection} = require('mongoose')

const connectionStringURI = 'mongodb://127.0.0.1:27017/socialDB'

connect(
    connectionStringURI,
    {useNewUrlParser: true, useUnifiedTopology: true},

)

module.exports = connection