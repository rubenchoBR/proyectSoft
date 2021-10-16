const express = require('express');
const router = express.Router();
const sequelize = require('../database/db');
const {Ventas, DetallesVentas, Productos} = require('../database/models');


router.get('/obtener-articulos', function(req, res, next) {
    Articulo.findAll().then(
        productos => {
            return res.json(productos);
        }
    )
});

router.get('/detallar-venta', function(req, res, next) {
    Ventas.findAll(
        {include:'DetallesVentas'}
      ).then( venta => {
            return res.json(venta);}
      );

});

router.post('/crear-venta', function(req, res){
    Ventas.create({req}, {
        include:  'DetallesVentas'//aca se debe usar el alias, no el objeto de modelo
      }
    ).then( response => {
        return res.json(response);}
  );;
});

router.post('/crear-productos', function(req, res){
    Productos.create({req}
    ).then( response => {
        return res.json(response);}
  );;
});

router.get('/', function(req, res, next) {
    res.send("prueba de consumo");
});

module.exports = router;