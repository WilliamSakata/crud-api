const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/apiCrud', {useMongoClient: true})

mongoose.Promise = global.Promise

module.exports = mongoose