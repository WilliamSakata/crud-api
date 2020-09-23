const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyparser.json())

app.use(bodyParser.urlencoded({ extended: false}))

require('./routes/user.js')(app)

app.listen(3000)