const controller = {};
const { getConnection } = require('../database')
const request = require('request');
const { response } = require('express');
const bcrypt = require("bcrypt");
const saltRounds = 10;

controller.getUsuarios = async (req, res) => {
    try {
        var connection = await getConnection();
        const result = await connection.query('SELECT * FROM usuarios');
        req.session.save(function(err) {
        
            res.json(result);
          })
        
    } catch (error) {
        req.session.save(function(err) {
            res.status(500);
            res.send(error.message);
          })
        
    }
  };

  controller.getUser = async (req, res, next) => {
    try {
        var connection = await getConnection();
        const result = await connection.query('SELECT * FROM usuarios where dni = ?', req.params.dni);
        req.session.save(function(err) {
        
            res.json(result);
          })
    } catch (error) {
        req.session.save(function(err) {
            res.status(500);
            res.send(error.message);
          })
    }
  };

  controller.editUser = async (req, res) => {
    try {
      var dni = req.params.dni;
      var nombre = req.body.nombre;
      var apellidos = req.body.apellidos;
      var email = req.body.email;
      var telefono = req.body.telefono;
      console.log("esperando conexion")
      const connection = await getConnection();
      
      await connection.query('UPDATE usuarios SET nombre = ?, apellidos = ?, telefono = ?, email = ? WHERE dni = ?', [nombre, apellidos, telefono, email, dni]);
      console.log("Usuario modificado");
      req.session.save(function(err) {
            res.sendStatus(204);})
    } catch (error) {
      req.session.save(function(err) {
        // session saved
        
        res.status(500);
        res.send(error.message);
      })

  };
};

controller.modificarContraseña = async (req, res) => {
  try {
    var dni = req.params.dni;
    var contraseñaAntigua = req.body.contraseñaAntigua;
    var contraseñaNueva1 = req.body.contraseñaNueva1;
    var contraseñaNueva2= req.body.contraseñaNueva2;
    
    console.log("esperando conexion")
    const connection = await getConnection();
    //cogemos al usuario, comprobamos que tiene autorizacion, se sabe la contraseña actual
    connection.query('SELECT * FROM usuarios WHERE dni = ?;', dni, (err, result) => {
      if(err){
        req.session.save(function(err) {
          res.send(err);})
          
      }
      bcrypt.compare(contraseñaAntigua, result[0].contraseña, (error, response) => {
        console.log("entra en la comparacion");
        if (response) {//la contraseña actual coinciden
          if (contraseñaNueva1 === contraseñaNueva2) {
            //las contraseñas coinciden, se modifica la contraseña
            bcrypt.hash(contraseñaNueva1, saltRounds, async(err, hash) => {
              if (err) {
                console.log(err);
              }
              console.log("hace el hash");
              var connection = await getConnection();
              await connection.query('UPDATE usuarios SET contraseña = ? WHERE dni = ?', [hash, dni]);
              console.log('contraseña modificada')
              req.session.save(function(err) {
                res.sendStatus(204);})
              
              
  
        })} else {
          req.session.save(function(err) {
            res.send({ message: "Los campos de las contraseñas nuevas no coinciden" });})
          
        }
      }
      else {
        req.session.save(function(err) {
          res.send({ message: "La contraseña actual no es correcta" });})
        
      }});




  })
    
  
  } catch (error) {
    req.session.save(function(err) {
      // session saved
      
      res.status(500);
      res.send(error.message);
    })
  }
};

controller.deleteUsuario = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("DELETE FROM usuarios WHERE dni = ?", [
    req.params.dni,
  ]);
  console.log(result);

  res.sendStatus(204);
};




  module.exports = controller;