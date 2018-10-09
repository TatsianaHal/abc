module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'user',
      'updatedAt',
      Sequelize.DATE,
    );
  },

  down: queryInterface => queryInterface.removeColumn('user', 'updatedAt'),
};
