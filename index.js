require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

const routes = express.Router();
const login = require('./routes/login');
const home = require('./routes/home');
const register = require('./routes/register');

const MONGODB_URI = process.env.URI

mongoose.connect(MONGODB_URI);

app.use('/', home);
app.use('/login', login);
app.use('/register', register);

app.listen(process.env.PORT || 3000, () => {
  console.log(`\n Server is running`);
});

module.exports = app;