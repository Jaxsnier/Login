require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.URI
const express = require('express');
const app = express();


mongoose.connect(MONGODB_URI);

const User = mongoose.model('User', new mongoose.Schema({
  name: String,
}));

User.create(
  { 
    name: 'Carlos' 
  })
  .then(() => console.log('User created') );

app.get('/', (req, res) => {
    User.find().then(x=> res.send(x));
});

module.exports = app;


app.listen(process.env.PORT || 3000, () => {
  console.log(`\n Server is running`);
});
