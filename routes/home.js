const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
   res.send(' hola soy home route');
});

module.exports = routes;