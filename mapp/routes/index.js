var express = require('express');

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
  let password = req.body.password;

  if (password === 'a') {
    // good password
    //req.session = ...
    res.redirect('/users');
  } else {
    res.render('login', { title: 'Login', msg: 'Username or password incorrect.' });
  }
});

module.exports = router;
