const {
  dashboard,
  logout,
  // signin,
  // signup,
} = require('../controllers');

function auth(app, passport) {
  // app.get('/signup', signup);
  // app.get('/signin', signin);

  app.post(
    '/signup',
    passport.authenticate('local-signup'),
    (req, res) => {
      res.json(req.user);
    },
  );

  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      // res.redirect('/signin');
    }
    res.json(req.isAuthenticated());
  };

  app.get('/dashboard', isLoggedIn, dashboard);
  app.get('/logout', logout);

  app.post(
    '/signin',
    passport.authenticate('local-signin'),
    (req, res) => {
      res.json(req.user);
    },
  );
}

module.exports = auth;
