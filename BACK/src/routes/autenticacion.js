const express = require('express');
const router = express.Router();
const autenticacionController = require('../controllers/autenticacionController');
const { isLoggedIn } = require('../lib/auth');
const jwt = require('jsonwebtoken');

router.post("/logout", isLoggedIn, (req, res) => {
  //console.log(req.session.user[0].dni)
  //req.session.user == null esto devuelve si el usuario esta en una sesion o no
  req.session.destroy((err) => {
    if (err) throw err;
    res.json({ message: "Usuario ha cerrado sesion" });
  });
});

router.post('/registrar', autenticacionController.registrar);
router.post('/login', autenticacionController.login);


module.exports = router;