const express = require("express");
const { crearUsuario } = require("../controllers/UsuariosControlador");
const router = express.Router();

router.post("/", crearUsuario);

module.exports = router;
