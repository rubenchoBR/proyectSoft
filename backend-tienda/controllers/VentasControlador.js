const { Ventas, DetallesVentas, Usuarios } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const crearVenta = async (req, res) => {
  try {
    const ventaCreada = await Ventas.create(req.body, {include:  'dventas'});
    if (ventaCreada) {
      res.status(200).send({
        ventaCreada,
      });
    } else {
      res.status(400).send({
        msg: "Error al crear la venta",
      });
    }
  } catch (error) {}
};

const listarVentas = async (req, res) => {
  try {
    const listaventas = await Ventas.findAll({
      include: [
        { model: DetallesVentas, as: "dventas" },
        { model: Usuarios, as: "usuarios" },
      ],
    });
    if (listaventas.length > 0) {
      res.status(200).send({
        listaventas,
      });
    } else {
      res.status(200).send({
        msg: "No hay ventas registradas",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  crearVenta,
  listarVentas,
};
