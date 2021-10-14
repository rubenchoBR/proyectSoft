const express = require('express');
const router = express.Router();
const Articulo = require('../database/models/Articulo');
//const DetalleVenta = require('../database/models/DetalleVenta');
const Venta = require('../database/models/Venta');


router.get('/obtener-articulos', function(req, res, next) {
    //res.send("prueba de consumo tabla");
    Articulo.findAll().then(
        productos => {
            return res.json(productos);
        }
    )
});

router.get('/detallar-venta', function(req, res, next) {
/*
    Venta.findAll().then(

        venta => {
            venta.getDetalleVenta().then(detalle => {
                console.log("hola", venta)
            });
            console.log("hola", venta)
        });*/
        Venta.findAll(/*{
            include: [{
              model: DetalleVenta,
              as: 'users',
            }],
          }*/).then(
           // {include:'venta_idventas'}
/*
            (venta) => {
                venta.getDetalleVenta().then(detalle => {
                    console.log("hola2", venta)
                });
                console.log("hola3", venta)
            });*/
            venta => {
                //venta.getDetalleVenta();
                console.log("hola3", venta);
                
                return res.json(venta);
            });
});

router.get('/', function(req, res, next) {
    res.send("prueba de consumo");
});

module.exports = router;