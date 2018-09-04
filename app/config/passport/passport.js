const {
  configSerialize,
  configDeserialize,
  configSignUpStrategy,
  configSignInStrategy,
} = require('./config');

function initialize(passport, User) {
  passport.use('local-signup', configSignUpStrategy(User));

  passport.use('local-signin', configSignInStrategy(User));

  passport.serializeUser(configSerialize());

  passport.deserializeUser(configDeserialize(User));
}

module.exports = initialize;
