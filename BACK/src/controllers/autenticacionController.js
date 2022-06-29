const controller = {};
const { getConnection } = require('../database')
const request = require('request');
const { response } = require('express');
const bcrypt = require("bcrypt");
const session =  require('express-session');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

controller.registrar = async (req, res) => {
    try {
        const dni = req.body.dni;
        const contraseña = req.body.contraseña;
        var connection = await getConnection();
        connection.query('SELECT * FROM usuarios WHERE dni = ?;', dni, (err, result) => {
          if(!err){

            res.status(400);
            res.send({ message: "El usuario ya existe" });
          }})

        bcrypt.hash(contraseña, saltRounds, async(err, hash) => {
            if (err) {
              console.log(err);
            }
            var connection = await getConnection();
            await connection.query('INSERT INTO usuarios (dni, contraseña, rol) VALUES (?,?,?)', [dni, hash, 'usuario']);
            console.log('usuario insertado')
            res.sendStatus(204);


    })

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

controller.login = async (req, res) => {
    try {
        const dni = req.body.dni;
        const contraseña = req.body.contraseña;
       
        var connection = await getConnection();
        connection.query('SELECT * FROM usuarios WHERE dni = ?;', dni, (err, result) => {
            if(err){
                res.send(err);
            }
            if (result.length > 0) {
                bcrypt.compare(contraseña, result[0].contraseña, (error, response) => {
                  if (response) {
                    const token = jwt.sign({ dni: req.body.dni }, 'secret', { expiresIn: '5h' });
                    req.session.user = result;
                    res.status(200).json({message: "usuario loggeado", "token": token});
                  } else {
                    res.send({ message: "Usuario o contraseña incorrectos" });
                  }
                });
              } else {
                res.send({ message: "El usuario no existe" });
              }
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = controller;

  