const express = require('express');
const router = express.Router();
const injertosController = require('../controllers/injertosController');
const { isLoggedIn } = require('../lib/auth');

router.get('/injertos', injertosController.getInjertos);
/*router.get('/injertos', (req, res) =>   {  
    
    let sql = "INSERT INTO injertos (edad, sexo, imc, hta, dm, dlp, apm, apq, got, gpt, ggt, na, bbt, acvhc, acvhbc, dosisna, aminas, ecografia_1, ecografia_2, ecografia_3, fecha) VALUES (21,0,28.89,  False, False, False, True, False,45.0, 95.0, 300.00, 138, 0.4, False, False, 0.0, False, True, False, False, ?);"
    db.query(sql,(err, resut)=>{
        if (err) throw err;
        res.send(resut);
    });
});*/
router.get('/', (req, res) =>   {  
    
   res.send('pagina principal')
});

router.post('/injertos/crear', injertosController.addInjerto);

router.get('/injertos/:id', injertosController.getInjerto); 
router.post('/injertos/:id/editar', injertosController.editInjerto);
router.get("/injertos/:id/predecir", injertosController.prediccion);






module.exports = router;
