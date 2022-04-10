'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('pecas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      motor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'motor', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      pec_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      pec_fabricante: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      pec_descricao: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      pec_datafab: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('pecas');
  }
};
