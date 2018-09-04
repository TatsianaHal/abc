const {
  dashboard,
  logout,
  signin,
  signup,
} = require('../controllers');

function auth(app, passport) {
  app.get('/signup', signup);
  app.get('/signin', signin);

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
  }));

  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/signin');
    }
  };

  app.get('/dashboard', isLoggedIn, dashboard);
  app.get('/logout', logout);

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/signin',
  }));
}

module.exports = auth;
