"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuarios.belongsTo(models.Roles, { as: "roles" });
      Usuarios.belongsTo(models.Estados, { as: "estados" });

      Usuarios.hasMany(models.Ventas, {
        foreignKey: "usuariosId",
        as: "usuariosventas",
      });
    }
  }
  Usuarios.init(
    {
      nombres: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      usuario: DataTypes.STRING,
      correo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuarios",
    }
  );
  return Usuarios;
};
