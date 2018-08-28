const exports = {};
module.exports = exports;

exports.signup = (req, res) => {
  res.render('signup');
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.dashboard = (req, res) => {
  res.render('dashboard');
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
