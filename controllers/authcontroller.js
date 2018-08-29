const signup = (req, res) => {
  res.render('signup');
};

const signin = (req, res) => {
  res.render('signin');
};

const dashboard = (req, res) => {
  res.render('dashboard');
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

module.exports = {
  signup,
  signin,
  dashboard,
  logout,
};
