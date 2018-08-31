const authControllerSignUp = require('../controllers/signup');
const authControllerSignIn = require('../controllers/signin');
const authControllerDashboard = require('../controllers/dashboard');
const authControllerLogout = require('../controllers/logout');

module.exports = (app, passport) => {
  app.get('/signup', authControllerSignUp.signup);
  app.get('/signin', authControllerSignIn.signin);

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
  }));

  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    }
    res.redirect('/signin');
  };

  app.get('/dashboard', isLoggedIn, authControllerDashboard.dashboard);
  app.get('/logout', authControllerLogout.logout);

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/signin',
  }));
};
