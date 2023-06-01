var express = require('express');
var router = express.Router();
var {getAllUsers,createuser,getUserbyUsername} = require("../controllers/userController");


/* GET users listing. */
router.get('/', getAllUsers);

router.post('/',createuser);

router.get('/:username',getUserbyUsername);


module.exports = router;
