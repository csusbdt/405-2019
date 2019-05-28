const { Router } = require('express');
const db         = require('./db'   );

const router = Router();

router.post('/register', (req, res) => {
  const userid   = req.body.userid;
  const password = req.body.password;
  const email    = req.body.email;
  db.createUser(userid, password, email, (err, errmsg) => {
    if (err) {
      throw err;
    } else if (errmsg) {
      res.render('index', { msg: errmsg });
    } else {
      res.render('index', { msg: 'Hello, ' + userid });
    }
  });
});

router.post('/login', (req, res) => {
  const userid   = req.body.userid;
  const password = req.body.password;
  db.getUser(userid, (err, user) => {
    if (err) {
      throw err;
    } else if (!user || user.password !== password) {
      res.render('index', { msg: 'Incorrect username or password.' });
    } else {
      res.render('index', { msg: 'Hello, ' + userid });
    }
  });
});

router.post('/logout', (req, res) => {
  delete req.session.userid;
  res.render('index', { msg: 'Logged out.'});
});

module.exports = router;

