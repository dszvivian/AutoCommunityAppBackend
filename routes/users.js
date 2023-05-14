var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users Backend WOrking Pretty Fine..........Lesss GoooooOooO');
});


module.exports = router;
