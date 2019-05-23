const { Pool } = require('pg');

const pool = new Pool({
  user     : 'turner' ,
  password : ''       ,
  database : 'reg'    ,
  port     : 5432
});

module.exports.init = () => {
  pool.connect((err, conn, done) => {
    if (err) throw err;
  });
};

module.exports.createUser = (userid, password, email, cb) => {
  pool.connect((err, conn, done) => {
    if (err) throw err;
    const sql = "insert into users (userid, password, email) values ($1, $2, $3)";
    conn.query(sql, [userid, password, email], (err) => { 
      done();
      if (err) {
        if (err.code == 23505) {
          if (err.constraint === 'users_pkey') {
            cb(null, 'Username already exists.');
          } else if (err.constraint === 'users_email_key') {
            cb(null, 'Email already exists.');
          } else {
            throw err;
          }
        } else {
          throw err;
        }
      } else {
        cb(null, null);
      }
    });
  });
};

