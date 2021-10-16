const { DetallesVentas } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const crearDetallesVenta = async (req, res) => {
  try {
    console.log(req.body);
    const detallesVentaCreada = await DetallesVentas.create(req.body);
    if (detallesVentaCreada) {
      res.status(200).send({
        detallesVentaCreada,
      });
    } else {
      res.status(400).send({
        msg: "Error al crear la venta",
      });
    }
  } catch (error) {}
};

const listarDetallesVentas = async (req, res) => {
  try {
    const listaDetallesventas = await DetallesVentas.findAll({
      include: "ventas",
      include: "productos",
    });
    if (listaDetallesventas.length > 0) {
      res.status(200).send({
        listaDetallesventas,
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
  crearDetallesVenta,
  listarDetallesVentas,
};
