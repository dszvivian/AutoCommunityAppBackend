var postModel = require("../models/post.js")


let createPost =  async(req,res)=>{

    try{
        const un = req.params.username;
        
        const post = new postModel({
            username:un,
            postImage:req.body.postImage
        })

        const newPost = new postModel(post);
        const newPostSave = await newPost.save()
        res.status(201).json(newPostSave)

    }catch{
        res.status(400).json({message:error.message})
    }
}

let getAllPost = async(req,res)=>{
    try{
        const getAllPost = await postModel.find();
        res.status(201).json(getAllPost)
    }catch{
        res.status(400).json({message:error.message})
    }
}


let getPostByUsername = async (req,res)=>{
    try{un = req.params.username;
        const postList = await postModel.find({username:un});
        res.status(201).json(postList)
    }catch{
        res.status(400).json({message:error.messsage})
    }
}

module.exports = {createPost,getAllPost,getPostByUsername};