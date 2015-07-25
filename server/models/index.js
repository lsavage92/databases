var db = require('../db');




module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (req) {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (res) {
      //db.connection.connect()
      db.query('SELECT * FROM Users', function(err, result, fields) {
        if (err) console.log(err);
        console.log('Results: ', result);
        res.send(result);
      });
    },
    post: function () {

    }
  }
};