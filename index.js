require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.URI || "mongodb+srv://Jaxsnier:Eep2265244@logincluster.oz23f9k.mongodb.net/?retryWrites=true&w=majority&appName=LoginCluster";
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
    /*res.send({mensaje: 'Hello World! login'});*/

    User.find().then(x=> res.send(x));
});

module.exports = app;


app.listen(process.env.PORT || 3000, () => {
  console.log(`\n Server is running`);
});
