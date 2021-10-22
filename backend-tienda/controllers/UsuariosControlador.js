const { Usuarios } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const crearUsuario = async (req, res) => {
  try {
    const usuarioCreado = await Usuarios.create(req.body);
    if (usuarioCreado) {
      res.status(200).send({
        usuarioCreado,
      });
    } else {
      res.status(400).send({
        msg: "Error al crear el producto",
      });
    }
  } catch (error) {}
};

module.exports = {
  crearUsuario,
};
