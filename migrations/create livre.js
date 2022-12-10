'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livre', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titre: {
        type: Sequelize.STRING(30),
        allowNull:false
      },
      auteur: {
        type: Sequelize.STRING(40),
        allowNull:false
      },
      prix: {
        type: Sequelize.INTEGER(10),
        allowNull: false
      },

      datePublication: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('livre');
  }
};