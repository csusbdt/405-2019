const { Pool } = require('pg');

const pool = new Pool({
  user: 'turner',
  host: 'localhost',
  database: 'mapp',
  password: '',
  port: 5432
});

exports.init = function() {
  pool.connect((err, client, done) => {
    if (err) {
      console.error("Is the database running?");
      throw err;
    }
  });
}

exports.getUser = function(userid, cb) {
  pool.connect((err, client, done) => {
    if (err) return cb(err);
    client.query('select * from users where userid = $1', [userid], function (err, result) {
      done();
      if (err) { 
        cb(err); 
      } else if (result.rows.length === 0) {
        cb(null, null);
      } else {
        cb(null, result.rows[0]);
      }
    });
  });
};


exports.getPassword = function(userid, cb) {
  pool.connect((err, client, done) => {
    if (err) return cb(err);
    client.query('select password from users where userid = $1', [userid], function (err, result) {
      done();
      if (err) { cb(err); return; }
      if (result.rows.length === 0) {
        cb(null, null);
        return;
      }
      cb(null, result.rows[0].password);
    });
  });
};

exports.createUser = function(email, userid, password, cb) {
  exports.getUser(userid, (err, user) => {
    if (err) {
      cb(err);
    } else if (user !== null) {
      cb(null, 'Username already taken.');
    } else {
      pool.connect((err, client, done) => {
        if (err) return cb(err);
        let sql = 'insert into users (userid, password, email) values ($1, $2, $3);';
        client.query(sql, [userid, password, email], (err, result) => {
          done(); 
          if (err) { 
            cb(err);
          } else {
            cb(null);
          }
        });
      }); 
    }
  });
};

