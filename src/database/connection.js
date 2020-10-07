const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/api_crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

mongoose.Promise = global.Promise

module.exports = mongoose