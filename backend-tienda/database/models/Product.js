const {Model, DataTypes} = require('sequelize');//siempre es necesario para construir el modelo
const sequelize = require('../db');

class Product extends Model{

}
Product.init({
    name:DataTypes.STRING,// DataTypes para tipar
    valor:DataTypes.DOUBLE,
    peso:DataTypes.FLOAT,
    stock:DataTypes.INTEGER,
    categoria:DataTypes.INTEGER,
    descripcion: DataTypes.TEXT

}, {sequelize, modelName:"Product"});

module.exports = Product;