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

module.exports = router;

