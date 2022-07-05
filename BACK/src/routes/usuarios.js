const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const { isLoggedIn, isAdmin, isTheSameUserOrAdmin } = require('../middlewares/auth');

router.use(isLoggedIn);
router.get('/usuarios', isAdmin, usuariosController.getUsuarios);
router.get('/usuarios/:dni', isTheSameUserOrAdmin, usuariosController.getUser);
router.put('/usuarios/:dni', isTheSameUserOrAdmin, usuariosController.editUser);
router.post('/usuarios', isAdmin, usuariosController.crearUsuario);
router.put("/usuarios/:dni/password", isTheSameUserOrAdmin, usuariosController.modificarContraseña);
router.delete("/usuarios/:dni", isAdmin, usuariosController.deleteUsuario);

module.exports = router;