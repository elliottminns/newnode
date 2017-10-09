const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  created_on: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
