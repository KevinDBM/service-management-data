'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('metrics', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      name: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.INTEGER.UNSIGNED
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('metrics');
  }
};
