const passportLocal = require('passport-local');
const configFindUser = require('./config-find-user');

const LocalStrategy = passportLocal.Strategy;

function configSignInStrategy(User) {
  return new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    configFindUser(User),
  );
}

module.exports = configSignInStrategy;
