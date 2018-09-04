const passportLocal = require('passport-local');
const configCreateUser = require('./config-create-user');

const LocalStrategy = passportLocal.Strategy;

function configSignUpStrategy(User) {
  return new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    configCreateUser(User),
  );
}

module.exports = configSignUpStrategy;
