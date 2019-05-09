const mongoose = require('mongoose');

const Entry = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: new Date(),
  }
});

module.exports = mongoose.model('Entry', Entry);