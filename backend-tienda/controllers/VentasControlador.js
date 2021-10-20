const { Ventas, DetallesVentas, Usuarios } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const crearVenta = async (req, res) => {
  try {
    Ventas.create(req.body, {
      include:  'dventas'//aca se debe usar el alias, no el objeto de modelo
    }
  ).then( response => {
      return res.json(response);}
);;
  } catch (error) {
    console.log(error)
  }
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
