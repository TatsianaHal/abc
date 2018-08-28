const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const models = require('./app/models');
const authRoute = require('./routes/auth.js');

const app = express();
dotenv.load();
app.use('/static', express.static('static'));

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Welcome to Passport with Sequelize');
});

app.listen(5000, (err) => {
  if (!err) {
    console.log('Site is live');
  } else {
    console.log(err);
  }
});

// Routes
authRoute(app, passport);

// load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

// Sync Database (синхронизация Sequelize):
models.sequelize.sync().then(() => {
  console.log('Nice! Database looks fine');
}).catch((err) => {
  console.log(err, 'Something went wrong with the Database Update!');
});

// For Handlebars:
app.set('views', './views');
app.engine('hbs', exphbs({
  extname: '.hbs',
}));
app.set('view engine', '.hbs');
