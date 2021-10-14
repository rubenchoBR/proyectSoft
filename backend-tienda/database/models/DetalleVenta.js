'use strict'
const {Model} = require('sequelize');
//const sequelize = require('../db');
//const Venta = require('./Venta');

module.exports = (sequelize, DataTypes) => {

    class DetalleVenta extends Model{
        static associate(models) {
            DetalleVenta.belongsTo(models.Ventas, {foreignKey: 'VentaIdventas', as: 'VentaIdventas'})    }
        }
    DetalleVenta.init({

        idDetallesVentas:{type: DataTypes.INTEGER, primaryKey: true},// DataTypes para tipar
        cantidad: DataTypes.INTEGER,
        total: DataTypes.FLOAT,
        VentaIdventas:{type:DataTypes.INTEGER,  field: 'venta_idventas'}
    
    
    }, {sequelize, modelName:"Detalles_Ventas", timestamps: false,  freezeTableName: true});//se le pone timestamps: false para que no sque el error de createdAt' in 'field list'
    
    return DetalleVenta;
    
}

;
