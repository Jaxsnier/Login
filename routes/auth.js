const express = require('express');
const crypto = require('crypto');
const Users = require('../models/user');

const routes = express.Router();

routes.get('/', (req, res) => {
   res.send(' Accedio auth con metodo GET, Fovor utilice POST');
});

routes.post('/register', (req, res) => {
   const { username, password } = req.body; //buscamos usuario y pass del frontend
   if (!username || !password) { return res.status(400).send('Faltan datos'); } //validamos que existan

   crypto.randomBytes(48, (err, salt) => {
      if (err) {
         return res.status(500).send('Error Generando salt');
      }
      const newSalt = salt.toString('base64');
      crypto.pbkdf2(password, newSalt, 10000, 64, 'sha1', (err, key) => {
         if (err) {
            return res.status(500).send('Error Generando salt etapa 2');
         }
         const encryptedPassword = key.toString('base64');

         //verificamos si existe el usuario, sino registramos
         Users.findOne({ username }).exec().then(user => {
            if (user) {
               return res.status(400).send('El usuario ya existe');
            }
            //no existe, lo registramos
            Users.create({
               username,
               password: encryptedPassword,
               salt: newSalt,
            }).then(() => {
               res.send('Usuario registrado correctamente');
            })
         });
      });
   });
});

routes.post('/login', (req, res) => {
   const { username, password } = req.body;
   res.send(`Username: ${username}, Password: ${password}, logged in successfully!`);
});

module.exports = routes;