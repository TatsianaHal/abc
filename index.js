const express = require('express');
const app = express();

const passport   = require('passport');
const session    = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const exphbs = require('express-handlebars');

app.use('/static', express.static('static'));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); 
app.use(passport.initialize());
app.use(passport.session()); 

app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});
 
app.listen(5000, function(err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)
});

//Models (импорт моделей):
const models = require("./app/models");

//Routes 
const authRoute = require('./routes/auth.js')(app, passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);
 
//Sync Database (синхронизация Sequelize):
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine');
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
});

//For Handlebars:
app.set('views', './views');
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');



