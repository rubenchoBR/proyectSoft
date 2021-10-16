const express = require('express');
const router = express.Router();
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database/db');
//const Articulo = require('../database/models/Articulo');
//const DetalleVenta = require('../database/models/DetalleVenta');
//const Ventas= require('../database/models/ventas')(sequelize, DataTypes);;
//const DetalleVenta = require('../database/models/detallesventas')(sequelize, DataTypes);;
const {Ventas, DetalleVenta} = require('../database/models');


router.get('/obtener-articulos', function(req, res, next) {
    //res.send("prueba de consumo tabla");
    Articulo.findAll().then(
        productos => {
            return res.json(productos);
        }
    )
});

router.get('/detallar-venta', function(req, res, next) {
    console.log(Ventas);
    

    Ventas.findAll(
        {include:'DetallesVentas'}

      ).then(
       
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
            
            return res.json(venta);}
      );

});

router.get('/', function(req, res, next) {
    res.send("prueba de consumo");
});

module.exports = router;