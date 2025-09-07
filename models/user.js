const mongoose = require('mongoose');


const Users = mongoose.model('Users',new mongoose.Schema({
  name: String,
  usuario: String,
  password: String,
  salt: String,
}));

module.exports = User;