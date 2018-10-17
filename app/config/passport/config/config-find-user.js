const helpers = require('../helpers');

function configFindUser(User) {
  return function findUser(req, email, password, done) {
    User.scope('checkPass').findOne({
      where: {
        email,
      },
    }).then((user) => {
      if (!user) {
        return done(null, false, {
          message: 'Try one more time',
        });
      }
      if (!helpers.isValidPassword(user.password, password)) {
        return done(null, false, {
          message: 'Try one more time',
        });
      }
      const userinfo = {
        ...user.get(),
        password: undefined,
      };

      return done(null, userinfo);
    }).catch((err) => {
      console.log('Error:', err);
      return done(null, false, {
        message: 'Something went wrong',
      });
    });
  };
}

module.exports = configFindUser;
