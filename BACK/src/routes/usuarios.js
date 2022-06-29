const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');


router.get('/usuarios', usuariosController.getUsuarios);

module.exports = router;