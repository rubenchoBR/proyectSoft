'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ventas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      Ventas.hasMany(models.DetallesVentas, { foreignKey: 'idventas', as:'DetallesVentas'});
  }
  };
  Ventas.init({
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Ventas',
  });
  return Ventas;
};