var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({message:'Users Backend Working Pretty Fine..........Lesss GoooooOooO'});
});


module.exports = router;
