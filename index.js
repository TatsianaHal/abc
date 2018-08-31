const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const getdir = require('./app/config/getdirs');
const models = require('./app/models');
const authRoute = require('./app/auth/routes/auth');

const appDir = path.join(process.cwd(), 'app');

const app = express();
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
app.set('views', getdir.func(appDir, 'views'));

app.set('view engine', '.hbs');
