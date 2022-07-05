const controller = {};
const { getConnection } = require('../database')
const request = require('request');
const { response } = require('express');
const bcrypt = require("bcrypt");
const session =  require('express-session');
const jwt = require('jsonwebtoken');

controller.login = async (req, res) => {
    try {
        const dni = req.body.dni.toUpperCase();
        const contraseña = req.body.contraseña;
       
        var connection = await getConnection();
        connection.query('SELECT * FROM usuarios WHERE dni = ?;', dni, (err, result) => {
            if(err){
              res.status(400);
                res.send(err);
            }
            if (result.length > 0) {
                bcrypt.compare(contraseña, result[0].contraseña, (error, response) => {
                  if (response) {
                    const token = jwt.sign({ dni: req.body.dni }, 'secret', { expiresIn: '5h' });
                    req.session.user = result;
                    res.status(200).json({message: "usuario loggeado", "token": token});
                  } else {
                    res.status(400).json({ message: "Usuario o contraseña incorrectos" });
                  }
                });
              } else {
                res.status(400).json({ message: "El usuario no existe" });
              }
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

controller.logout = async(req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.status(200).json({ message: "Usuario ha cerrado sesion" });
  });
};

module.exports = controller;

  