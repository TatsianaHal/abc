const configSerialize = require('./config-serialize');
const configDeserialize = require('./config-deserialize');
const configSignUpStrategy = require('./config-signup-strategy');
const configSignInStrategy = require('./config-signin-strategy');

module.exports = {
  configSerialize,
  configDeserialize,
  configSignUpStrategy,
  configSignInStrategy,
};
