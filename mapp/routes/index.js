var express = require('express');
var db      = require('../db');

var router  = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  // if username and password are good:
  let userid   = req.body.userid;
  let submittedPassword = req.body.password;
  db.getPassword(userid, (err, storedPassword) => {
    if (err) throw err;
    if (storedPassword === null) {
      res.render('login', { title: 'Login', msg: 'Username or password incorrect.' });
      return;
    }
    if (submittedPassword === storedPassword) {
      // good password
      req.session.userid = userid;
      res.redirect('/users');
    } else {
      // bad password
      res.render('login', { title: 'Login', msg: 'Username or password incorrect.' });
    }
  });
});

router.get('/logout', function(req, res, next) {
  delete req.session.userid;
  res.redirect('/');
});

module.exports = router;
