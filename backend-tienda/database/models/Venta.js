const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');
const DetalleVenta = require('./DetalleVenta');

class Venta extends Model{

}
Venta.init({

    idventas:{type: DataTypes.INTEGER, primaryKey: true},// DataTypes para tipar
    fecha: DataTypes.TEXT


}, {sequelize, modelName:"Ventas", timestamps: false,  freezeTableName: true});//se le pone timestamps: false para que no sque el error de createdAt' in 'field list'

Venta.associate = function(models){
    Venta.hasMany(models.DetalleVenta, {as:'venta_idventas', foreignKey: 'venta_idventas'});
}



module.exports = Venta;