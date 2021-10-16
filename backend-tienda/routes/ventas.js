const express = require("express");
const {
  crearVenta,
  listarVentas,
} = require("../controllers/VentasControlador");
const router = express.Router();

router.get("/", listarVentas);
router.post("/", crearVenta);

module.exports = router;
