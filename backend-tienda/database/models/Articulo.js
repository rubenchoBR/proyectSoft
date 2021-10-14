const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Articulo extends Model{

}
Articulo.init({

    idProducto:{type: DataTypes.INTEGER, primaryKey: true},// DataTypes para tipar
    nombre: DataTypes.TEXT,
    valor: DataTypes.DOUBLE,
    imagen: DataTypes.TEXT,
    disponibilidad :  DataTypes.INTEGER


}, {sequelize, modelName:"Productos", timestamps: false,  freezeTableName: true});//se le pone timestamps: false para que no sque el error de createdAt' in 'field list'

module.exports = Articulo;