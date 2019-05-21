const { Router } = require('express');

const router = Router();

router.post('/register', (req, res) => {
  res.send("It works");
});

module.exports = router;

