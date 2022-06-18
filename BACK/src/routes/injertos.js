const express = require('express');
const router = express.Router();
const injertosController = require('../controllers/injertosController');
const db = require('../database');

router.get('/injertos', injertosController.getInjertos);
router.get('/injertos/crear', (req, res) => {
    res.send("Aqui se puede crear un nuevo injerto");
    //res.render('crearInjerto') se mostrara la pagina para crear un injerto
});

router.get("/injertos/:id", injertosController.getInjerto); 
router.get("/injertos/delete/:id", injertosController.deleteInjerto); 
//router.post('/injertos/crear', injertosController.addInjerto);




module.exports = router;
