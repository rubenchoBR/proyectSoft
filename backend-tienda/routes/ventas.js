const express = require("express");
const {
  crearVenta,
  listarVentas,
} = require("../controllers/VentasControlador");
const router = express.Router();

router.get("/", listarVentas);

router.post('/crear-venta', crearVenta);

module.exports = router;
