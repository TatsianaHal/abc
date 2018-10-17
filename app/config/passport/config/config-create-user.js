const helpers = require('../helpers');

function configCreateUser(User) {
  return function createUser(req, email, password, done) {
    User.findOne({
      where: {
        email,
      },
    }).then((user) => {
      if (user) {
        return done(null, false, {
          message: 'That email is already taken',
        });
      }
      const userPassword = helpers.generateHash(password);
      const data = {
        email,
        password: userPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      };
      // добавление новых записей в базу данных:
      User.create(data).then((newUser) => {
        if (!newUser) {
          return done(null, false, {
            message: 'Something went wrong',
          });
        } if (newUser) {
          const userinfo = {
            ...newUser.get(),
            password: undefined,
          };
          return done(null, userinfo);
        }
        return false;
      });
      return false;
    });
  };
}

module.exports = configCreateUser;
