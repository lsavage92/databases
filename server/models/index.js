var db = require('../db');




module.exports = {
  messages: {
    get: function (res) {
      db.query('SELECT * FROM Messages', function(err, result, fields){
        if (err) console.log(err);
        res.send(result);
      })
    }, // a function which produces all the messages
    post: function (req) {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (res) {
      //db.connection.connect()
      db.query('SELECT * FROM Users', function(err, result, fields) {
        if (err) console.log(err);
        res.send(result);
      });
    },
    post: function (req, res) {
      var userName = req.body.userName;
      db.query('INSERT INTO `Users`(`username`) VALUES (?)', userName, function(err, results){
        res.json(results); // TODO: send back 201 instead of 200
      });
    }
  }
};

//curl -H "Content-Type: application/json" -X POST -d '{"userName":"FRANK", "message": "hey my first message", "roomName": "anonomyous"}' http://127.0.0.1:1337/classes/messages