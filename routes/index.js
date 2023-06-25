var express = require('express');
var router = express.Router();
var io = require('socket.io-client')


/* GET home page. */
router.get('/', function(req, res, next) {
  var socket = io();
  res.json({message:'Hoooray! Its Working............Lets Goooo'});
});



module.exports = router;
