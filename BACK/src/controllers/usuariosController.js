const controller = {};
const { getConnection } = require('../database')
const request = require('request');
const { response } = require('express');

controller.getUsuarios = async (req, res) => {
    try {
        var connection = await getConnection();
        const result = await connection.query('SELECT * FROM usuarios');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  };



  module.exports = controller;