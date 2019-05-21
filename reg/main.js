const express = require('express');
const auth    = require('./auth' );

const app = express();

app.set('view engine', 'pug'    );
app.set('views'      , './views');

app.use(express.urlencoded({ extended: false }));
app.use(auth);

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.listen(3000);

