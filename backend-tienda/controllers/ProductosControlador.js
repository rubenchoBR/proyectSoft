const { Productos } = require("../models/index");
const Sequelize = require("sequelize");
const { log } = require("debug");
const Op = Sequelize.Op;

const crearProducto = async (req, res) => {
  console.log(req);
  console.log(req.files);
  let file_name = "Imagen no subida";
  if (!req.files) {
    res.status(400).send({
      status: "Error",
      message: file_name,
    });
  }
  //Nombre y extencion
  let file_path = req.files.file.path;
  let file_split = file_split.split("\\");

  file_name = file_split[2];
  let extencion_split = file_name.split(".");
  let extencion = extencion_split[1];

  if (
    extencion != "png" &&
    extencion != "jpg" &&
    extencion != "jpge" &&
    extencion != "gif"
  ) {
  } else {
  }
  try {
    console.log(req.body);
    const productoCreado = await Productos.create(req.body);
    if (productoCreado) {
      res.status(200).send({
        productoCreado,
      });
    } else {
      res.status(400).send({
        msg: "Error al crear el producto",
      });
    }
  } catch (error) {}
};

const listarProductos = async (req, res) => {
  try {
    const listaProductos = await Productos.findAll();
    if (listaProductos.length > 0) {
      res.status(200).send({
        listaProductos,
      });
    } else {
      res.status(200).send({
        msg: "No hay productos registrados",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const editarProducto = async (req, res) => {
  res.status(200).send({
    msg: "editar productos",
  });
};

module.exports = {
  crearProducto,
  listarProductos,
  editarProducto,
};
