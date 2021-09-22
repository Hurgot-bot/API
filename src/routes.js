const express = require('express');
const router = express.Router();

const apiController  = require('./controllers/apiController');

router.get('/actor',apiController.buscarTudo);

module.exports = router;