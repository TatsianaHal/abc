module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'user',
      'createdAt',
      Sequelize.DATE,
    );
  },

  down: queryInterface => queryInterface.removeColumn('user', 'createdAt'),
};
