/* eslint consistent-return:0 */
const bCrypt = require('bcrypt-nodejs');
const passportLocal = require('passport-local');

const LocalStrategy = passportLocal.Strategy;

function generateHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
}

function isValidPassword(userpass, password) {
  return bCrypt.compareSync(password, userpass);
}

// инициализация локальной стратегии паспорта и модели пользователя:
module.exports = (passport, User) => {
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    (req, email, password, done) => {
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
        const userPassword = generateHash(password);
        const data = {
          email,
          password: userPassword,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
        };
        // добавление новых записей в базу данных:
        User.create(data).then((newUser) => {
          if (!newUser) {
            return done(null, false);
          } if (newUser) {
            return done(null, newUser);
          }
        });
      });
    },
  ));

  // LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    (req, email, password, done) => {
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
        if (!isValidPassword(user.password, password)) {
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
    },
  ));

  // СЕРИАЛИЗАЦИЯ (object -> bytes -> DB):
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // деСЕРИАЛИЗАЦИЯ (DB -> bytes -> object):
  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
};
