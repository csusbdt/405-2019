const { Router } = require('express');
const db         = require('./db'   );

const router = Router();

router.post('/register', (req, res) => {
  const userid   = req.body.userid;
  const password = req.body.password;
  const email    = req.body.email;

  db.createUser(userid, password, email, (err) => {
    if (err) {
      res.send('createUser failed in auth.js');
      return;
    }
    res.redirect('/');
  });
});

module.exports = router;

