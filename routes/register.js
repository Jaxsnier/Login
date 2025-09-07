const express = require('express');
const routes = express.Router();

routes.post('/', (req, res) => {
   res.send(' post register ejecuted');
});

module.exports = routes;