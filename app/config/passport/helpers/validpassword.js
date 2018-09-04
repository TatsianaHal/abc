const bCrypt = require('bcrypt-nodejs');

function isValidPassword(userpass, password) {
  return bCrypt.compareSync(password, userpass);
}

module.exports = isValidPassword;
