var express = require('express');
var router = express.Router();
var {getUsers,createuser} = require("../controllers/userController");


/* GET users listing. */
router.get('/', getUsers);

router.post('/new',createuser)


module.exports = router;
