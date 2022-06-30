const controller = {};
const { getConnection } = require('../database')
const request = require('request');
const { response } = require('express');

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

  controller.addUser = async (req, res) => {

  };




  module.exports = controller;