var express = require('express');
var router = express.Router();
var {getAllUsers,createuser,getUserbyUsername,updateUserDetails} = require("../controllers/userController");
var {getAllUserAssets,createUserAssets,getAssetsByUsername} = require('../controllers/userAssetsController')
var {createPost,getAllPost,getPostByUsername} = require('../controllers/postController.js')

/* GET users listing. */
router.get('/', getAllUsers);

router.post('/',createuser);

router.get('/:username',getUserbyUsername);

router.post('/update/:username',updateUserDetails)



router.get('/assets',getAllUserAssets);

router.get('/assets/:username',getAssetsByUsername);

router.post('/assets/:username',createUserAssets);

router.get('/posts',getAllPost);

router.post('/post/username',createPost);

router.get('/posts/username',getPostByUsername);




module.exports = router;
