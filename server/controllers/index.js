var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
// this is routed to 1337/classes/messages
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },
// this is routed to 1337/classes/users
  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(res);
    },
    post: function (req, res) {
    }

    /*options: function(req, res){
    }*/
  }
};

//curl -H "Content-Type: application/json" -X POST -d '{"userName":"FRANK", "message": "hey my first message", "roomName": "anonomyous"}' http://127.0.0.1:1337/classes/messages