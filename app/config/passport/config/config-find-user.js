const helpers = require('../helpers');

function configFindUser(User) {
  return function findUser(req, email, password, done) {
    User.findOne({
      where: {
        email,
      },
    }).then((user) => {
      if (!user) {
        return done(null, false, {
          message: 'Email does not exist',
        });
      }
      if (!helpers.isValidPassword(user.password, password)) {
        return done(null, false, {
          message: 'Incorrect password.',
        });
      }
      const userinfo = user.get();
      return done(null, userinfo);
    }).catch((err) => {
      console.log('Error:', err);
      return done(null, false, {
        message: 'Something went wrong with your Signin',
      });
    });
  };
}

module.exports = configFindUser;
