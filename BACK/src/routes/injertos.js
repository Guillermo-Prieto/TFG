const express = require('express');
const router = express.Router();
const injertosController = require('../controllers/injertosController');
const { isLoggedIn, isAdmin } = require('../middlewares/auth');

router.get('/injertos', injertosController.getInjertos);

router.post('/injertos/crear', injertosController.addInjerto);

router.get('/injertos/:id', injertosController.getInjerto); 
router.put('/injertos/:id/editar', injertosController.editInjerto);
router.get("/injertos/:id/predecir", injertosController.prediccion);






module.exports = router;
