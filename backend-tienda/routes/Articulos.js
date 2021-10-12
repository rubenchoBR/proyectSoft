const express = require('express');
const router = express.Router();
const Articulo = require('../database/models/Articulo');


router.get('/obtener-articulos', function(req, res, next) {
    //res.send("prueba de consumo tabla");
    Articulo.findAll().then(
        productos => {
            return res.json(productos);
        }
    )
});
router.get('/', function(req, res, next) {
    res.send("prueba de consumo");
});

module.exports = router;