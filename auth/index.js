const jwt = require('jsonwebtoken');
const Users = require('../models/Users.js');

module.exports = (req, res, next) => {
   const token = req.headers.authorization;
   if (!token) return res.status(403).send('No autorizado, falta token l-1');

    jwt.verify(token, 'MiSecreto', (err, decoded) => { 
        if (err) return res.status(401).send('No autorizado, token invalido l-2'); 
        const {_id} = decoded._id;
        Users.findOne({_id}).exec()
        .then(user => {
            if (!user) return res.status(401).send('No autorizado, usuario no existe l-3');
            req.user = user;
            next();
        })
    });
}