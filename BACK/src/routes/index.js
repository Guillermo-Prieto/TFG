const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send("Esta es la pagina principal")
    //res.render('index'); se mostrara la pagina principal
});

module.exports = router;