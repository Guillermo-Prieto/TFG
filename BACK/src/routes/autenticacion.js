const express = require('express');
const router = express.Router();
const autenticacionController = require('../controllers/autenticacionController');

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });

router.post('/registrar', autenticacionController.registrar);
router.post('/login', autenticacionController.login);


module.exports = router;