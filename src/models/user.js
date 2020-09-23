const mongoose = require('../database/connection');

const userSchema = new mongoose.Schema({
  name: [
    first: {
      type: String,
      required: true,
      lowercase: true
    },
    last: {
      type: String,
      required: true,
      lowercase: true
    }
  ],
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  sexo: {
    type: String,
    required: true,
    lowercase: true
  },
  idade: {
    type: Number,
    required: false
  },
  hobby: {
    type: String,
    required: false
  },
  dataNascimento: {
    type: Date,
    required: true
  },
  cpf: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User