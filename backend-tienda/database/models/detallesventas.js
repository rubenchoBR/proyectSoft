'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetallesVentas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      DetallesVentas.belongsTo(models.Ventas, {foreignKey: 'idventas', as: 'ventas'})    }

  };
  DetallesVentas.init({
    cantidad: DataTypes.INTEGER,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'DetallesVentas',
  });
  return DetallesVentas;
};