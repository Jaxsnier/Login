const mongoose = require('mongoose');
const User = mongoose.model('User',new mongoose.Schema({
  name: String,
  usuario: String,
  password: String,
}));

module.exports = User;