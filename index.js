require('dotenv').config();

const MONGODB_URI = process.env.URI;
const express = require('express');
const app = express();



const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({mensaje: 'Hello World! login'});
});

module.exports = app;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
