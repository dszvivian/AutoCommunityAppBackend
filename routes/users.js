var express = require('express');
var router = express.Router();
var {getAllUsers,createuser,getUserbyUsername} = require("../controllers/userController");
var {getAllUserAssets,createUserAssets} = require('../controllers/userAssetsController')

/* GET users listing. */
router.get('/', getAllUsers);

router.post('/',createuser);

router.get('/:username',getUserbyUsername);

router.get('/:username/assets',getAllUserAssets);

router.get('/:username/assets',createUserAssets);


module.exports = router;
