const express = require('express');
const router = express.Router();
const autenticacionController = require('../controllers/autenticacionController');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/auth');
const jwt = require('jsonwebtoken');

router.post("/logout", isLoggedIn, autenticacionController.logout);
router.post('/login', isNotLoggedIn, autenticacionController.login);


module.exports = router;