'use strict'
const {Model} = require('sequelize');
//const sequelize = require('../db');
//const DetalleVenta = require('./DetalleVenta');

module.exports = (sequelize, DataTypes) => {
    class Ventas extends Model{

        static associate(models) {
            Ventas.hasMany(models.DetalleVenta, { foreignKey: 'ventasId', as:'ventasid'});
        }
    }
    
Ventas.init({

    idventas:{type: DataTypes.INTEGER, primaryKey: true},// DataTypes para tipar
    fecha: DataTypes.TEXT


}, {sequelize, modelName:"Ventas", timestamps: false,  freezeTableName: true});//se le pone timestamps: false para que no sque el error de createdAt' in 'field list'
  
return Ventas;
};
