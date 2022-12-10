'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Livre.belongsTo(models.User);
    }
  }
  Livre.init({
    titre: DataTypes.STRING(30),
    auteur: DataTypes.STRING(30),
    prix: DataTypes.INTEGER(8),
    datePublication: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livre',
  });
  return Livre;
};