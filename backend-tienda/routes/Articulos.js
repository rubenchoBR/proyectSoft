const express = require('express');
const router = express.Router();

const {Ventas, DetallesVentas, Productos} = require('../database/models');



router.get('/obtener-articulos', function(req, res, next) {
    Productos.findAll().then(
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
    Ventas.create(req.body, {
        include:  'DetallesVentas'//aca se debe usar el alias, no el objeto de modelo
      }
    ).then( response => {
        return res.json(response);}
  );;
});

router.post('/crear-productos', function(req, res){
    //console.log(req);
    Productos.bulkCreate (/*{
        nombre: req.body.nombre,
        valor: req.body.valor,
        imagen: req.body.imagen,
        disponibilidad: req.body.disponibilidad
    }*/
    req.body
    ).then( response => {
        return res.json(response);}
  );;
});

router.get('/', function(req, res, next) {
    res.send("prueba de consumo");
});

module.exports = router;