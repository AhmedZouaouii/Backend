
/**
 * @author houssemeddinesaidi <houssem.saiidi@esprit.tn>
 */

 'use strict';
 const {
   Model
 } = require('sequelize');
 module.exports = (sequelize, DataTypes) => {
   class Club extends Model {
     /**
      * Helper method for defining associations.
      * This method is not a part of Sequelize lifecycle.
      * The `models/index` file will call this method automatically.
      */
     static associate(models) {
       // define association here
       Club.belongsTo(models.User);
      Club.hasMany(models.User);

     }
   }
   Club.init({
     nomClub: DataTypes.STRING(30),
     nbrMembres: DataTypes.INTEGER(3),
     activite: DataTypes.STRING(30),
     budget: DataTypes.INTEGER(10),
     dateFondation: DataTypes.DATE,
     UserId : DataTypes.INTEGER}, 
     {
     sequelize,
     modelName: 'Club',
   });
   return Club;
 };