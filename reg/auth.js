const { Router } = require('express');

const router = Router();

router.post('/register', (req, res) => {
  const userid = req.body.userid;
  res.send("Userid: " + userid);
});

module.exports = router;

