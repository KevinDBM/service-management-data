'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      name: {
        type: Sequelize.STRING
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
