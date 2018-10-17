const {
  logout,
} = require('../controllers');

function auth(app, passport) {
  app.post(
    '/signup',
    passport.authenticate('local-signup'),
    (req, res) => {
      res.json(req.user);
    },
  );

  const isLoggedIn = (req, res) => {
    res.json(req.isAuthenticated());
  };

  app.get('/dashboard', isLoggedIn);
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
