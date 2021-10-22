const express = require("express");
const multipart = require("connect-multiparty");
let md_upload = multipart({ uploadDir: "./public/upload/productos" });
const {
  crearProducto,
  listarProductos,
  editarProducto,
  mostrarImagen
} = require("../controllers/ProductosControlador");
const router = express.Router();

router.get("/", listarProductos);
router.post("/", md_upload, crearProducto);
router.put("/:id",md_upload, editarProducto);
router.get('/imagen/:image',mostrarImagen)
module.exports = router;
