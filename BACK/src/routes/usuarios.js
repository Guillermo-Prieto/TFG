const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');


router.get('/usuarios', usuariosController.getUsuarios);
router.get('/usuarios/:dni', usuariosController.getUser);

module.exports = router;