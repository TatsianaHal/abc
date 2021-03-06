module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    firstname: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    lastname: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    fullname: {
      type: Sequelize.TEXT,
    },
    about: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_login: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
  }, {
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
    scopes: {
      checkPass: {
        attributes: { },
      },
    },
  });
  return User;
};
