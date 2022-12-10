'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('club', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(15)
      },
      nomClub: {
        type: Sequelize.STRING(18),
        allowNull: false
        
      },
      nbrMembres: {
        type: Sequelize.INTEGER(3),
        allowNull: false
      },
      activite: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      budget: {
        type: Sequelize.INTEGER(10),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(45)
      },
     
      dateFondation: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
async down(queryInterface, Sequelize) {
 await queryInterface.dropTable('club');
  } 
};