const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');
const Venta = require('./Venta');

class DetalleVenta extends Model{

}
DetalleVenta.init({

    idDetallesVentas:{type: DataTypes.INTEGER, primaryKey: true},// DataTypes para tipar
    cantidad: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
    VentaIdventas:{type:DataTypes.INTEGER,  field: 'venta_idventas'}


}, {sequelize, modelName:"Detalles_Ventas", timestamps: false,  freezeTableName: true});//se le pone timestamps: false para que no sque el error de createdAt' in 'field list'

DetalleVenta.associate = function(models){
    Venta.belongsTo(models.Venta, {foreignKey: 'venta_idventas'})
}

module.exports = DetalleVenta;