module.exports = {
  up: queryInterface => queryInterface.renameColumn('user', 'username', 'fullname'),

  down: queryInterface => queryInterface.renameColumn('user', 'fullname', 'username'),
};
