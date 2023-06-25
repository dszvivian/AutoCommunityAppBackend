var express = require('express');
var router = express.Router();
var {createPost,getAllPost,getPostByUsername} = require('../controllers/postController.js')

router.get('/',getAllPost);

router.post('/:username',createPost);

router.get('/:username',getPostByUsername);