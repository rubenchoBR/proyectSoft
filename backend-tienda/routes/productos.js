const express = require("express");
const multipart = require("connect-multiparty");
let md_upload = multipart({ uploadDir: "./public/upload/productos" });
const {
  crearProducto,
  listarProductos,
  editarProducto,
} = require("../controllers/ProductosControlador");
const router = express.Router();

router.get("/", listarProductos);
router.post("/", md_upload, crearProducto);
router.put("/", editarProducto);
module.exports = router;
