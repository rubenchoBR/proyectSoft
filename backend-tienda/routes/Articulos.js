const express = require('express');
const router = express.Router();
const Bibliotecas = require('../database/models/Bibliotecas');


router.get('/obtener-articulos', function(req, res, next) {
    res.send("prueba de consumo tabla");
});
router.get('/', function(req, res, next) {
    res.send("prueba de consumo");
});

module.exports = router;