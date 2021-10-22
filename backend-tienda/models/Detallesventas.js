"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetallesVentas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetallesVentas.belongsTo(models.Ventas, { as: "ventas" });
      DetallesVentas.belongsTo(models.Productos, { as: "productos" });
    }
  }
  DetallesVentas.init(
    {
      cantidad: DataTypes.INTEGER,
      total: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "DetallesVentas",
    }
  );
  return DetallesVentas;
};
