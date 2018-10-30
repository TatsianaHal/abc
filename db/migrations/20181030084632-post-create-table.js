module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('post', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      prev: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    });
  },
  down: queryInterface => queryInterface.dropTable('post'),
};
