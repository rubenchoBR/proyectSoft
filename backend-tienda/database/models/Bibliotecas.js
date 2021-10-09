const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Bibliotecas extends Model{

}
Bibliotecas.init({

    idbibliotecas:{type: DataTypes.DOUBLE, primaryKey: true},// DataTypes para tipar
    nombre: DataTypes.TEXT

}, {sequelize, modelName:"Bibliotecas", timestamps: false});//se le pone timestamps: false para que no sque el error de createdAt' in 'field list'

module.exports = Bibliotecas;