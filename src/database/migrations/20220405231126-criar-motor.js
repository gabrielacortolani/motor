'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('motor', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      motor_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      motor_fabricante: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      motor_potencia: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      motor_cilindrada: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('motor');
  }
};