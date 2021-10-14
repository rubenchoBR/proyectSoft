const {Sequelize, DataTypes}  = require('sequelize');
const {database} = require('../config');

//acá se hacen las config de la bd
const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,
    {host:database.host,dialect:'mysql'}
);

module.exports = sequelize;