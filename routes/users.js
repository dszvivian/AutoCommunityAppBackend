var express = require('express');
var router = express.Router();
var {getAllUsers,createuser,getUserbyUsername,updateUserDetails} = require("../controllers/userController");
var {getAllUserAssets,createUserAssets,getAssetsByUsername} = require('../controllers/userAssetsController')

/* GET users listing. */
router.get('/', getAllUsers);

router.post('/',createuser);

router.get('/:username',getUserbyUsername);

router.post('/update/:username',updateUserDetails)



router.get('/assets',getAllUserAssets);

router.get('/assets/:username',getAssetsByUsername);

router.post('/assets/:username',createUserAssets);




module.exports = router;
