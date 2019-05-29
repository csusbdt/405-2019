const express       = require('express');
const passport      = require('passport');
const LocalStrategy = require('passport-local');
const session       = require('express-session');
const bodyParser    = require('body-parser');

const app = express();

passport.use(new LocalStrategy(
  function(username, password, done) {
    const user = { username: username, password: password };
    if (username === 'a' && password === 'a') {
      return done(null, user);
    } else {
      return done(null, false, 'Bad username or password.');
    }
  }
));

app.set( 'view engine' , 'pug'     );
app.set( 'views'       , './views' );

app.use(session({ secret: '1231231423234', resave: false, saveUninitialized: false }));
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

passport.serializeUser((user, cb) => {
  cb(null, JSON.stringify(user));
});

passport.deserializeUser((id, cb) => {
  cb(null, JSON.parse(id));
});

app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      next(err);
    } else if (user) {
      res.render('home', { user: user, msg: 'Hello, ' + user.username });
    } else {
      res.render('home', { msg: 'Bad username or password.' });
    }
  })(req, res, next);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.post('/forgot', (req, res) => {
  res.render('home', { msg: 'check email for login link' });
});

app.listen(3000);

