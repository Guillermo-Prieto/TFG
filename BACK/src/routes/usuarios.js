const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const {  isAdmin, isTheSameUserOrAdmin } = require('../middlewares/auth');
const { verifyToken } = require('../middlewares/verifyToken');

router.use(verifyToken);
router.get('/usuarios', isAdmin, usuariosController.getUsuarios);
router.get('/usuarios/:dni', isTheSameUserOrAdmin, usuariosController.getUser);
router.put('/usuarios/:dni', isTheSameUserOrAdmin, usuariosController.editUser);
router.post('/usuarios', isAdmin, usuariosController.crearUsuario);
router.put("/usuarios/:dni/password", isTheSameUserOrAdmin, usuariosController.modificarContraseña);
router.delete("/usuarios/:dni",  isAdmin, usuariosController.deleteUsuario);

module.exports = router;