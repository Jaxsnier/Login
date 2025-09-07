const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
   res.send(' hola soy login route');
});

routes.post('/', (req, res) => {
   const { username, password } = req.body;
   res.send(`Username: ${username}, Password: ${password}`);
});


module.exports = routes;