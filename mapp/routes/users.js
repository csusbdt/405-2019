var express = require('express');
var router = express.Router();

router.get('*', (req, res, next) => {
  if (req.session.userid === undefined) res.redirect('/login');
  else next();
});

router.get('/', function(req, res, next) {
  res.render('users', { data: 'I am data!' });
});

module.exports = router;
