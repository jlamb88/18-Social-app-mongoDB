const mongoose = require('mongose')

const connectionStringURI = 'mongodb://127.0.0.1:27017/socialDB'

mongoose.connect(
    connectionStringURI,
    {useNewUrlParser: true, useUnifiedTopology: true},

)

module.exports = mongoose.connection