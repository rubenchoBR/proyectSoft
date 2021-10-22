const express = require("express");
const {
  crearDetallesVenta,
  listarDetallesVentas,
} = require("../controllers/DetallesVentasControlador");
const router = express.Router();

router.get("/", listarDetallesVentas);
router.post("/", crearDetallesVenta);

module.exports = router;
