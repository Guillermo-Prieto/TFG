const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');


router.get('/usuarios', usuariosController.getUsuarios);
router.get('/usuarios/:dni', usuariosController.getUser);
router.put('/usuarios/:dni/editar', usuariosController.editUser);
router.put("/usuarios/:dni/password", usuariosController.modificarContraseña);
router.delete("/usuarios/:dni", usuariosController.deleteUsuario);

module.exports = router;