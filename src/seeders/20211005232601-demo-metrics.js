'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'metrics',
      [
        {
          id: 1,
          owner: 1,
          name: 'Test metric'
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('metrics', null, {});
  }
};
