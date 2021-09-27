const express = require('express');
const router = express.Router();

const apiController = require('./controllers/apiController');

router.get('/teste', apiController.buscarTudo);
router.post('/registrar', apiController.registrar);
router.post('/login', apiController.login);

module.exports = router;