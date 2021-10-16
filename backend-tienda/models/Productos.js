"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Productos.hasMany(models.DetallesVentas, {
        foreignKey: "productosId",
        as: "detallesproductos",
      });
    }
  }
  Productos.init(
    {
      nombre: DataTypes.STRING,
      valor: DataTypes.INTEGER,
      imagen: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      disponibilidad: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Productos",
    }
  );
  return Productos;
};
