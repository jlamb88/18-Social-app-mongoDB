const { urlencoded } = require('express')
const express = require('express')
const db = require('./config/connection');
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server connected at http://localhost:${PORT}`)
    })
})
