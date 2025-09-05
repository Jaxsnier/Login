const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('Hello World! login');
    res.send({mensaje: 'Hello World! login'});
});

module.exports = app;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
