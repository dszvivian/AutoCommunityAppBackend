var userAssetsModel = require("../models/userAssetsDetail.js")




let getAllUserAssets = async(req,res)=>{
    try{
        const getAllUserAssets = await userAssetsModel.find()
        res.status(201).json(getAllUserAssets)
    }
    catch{
        res.status(400).json({message:error.message})
    }
}

let createUserAssets = async(req,res)=>{

    try{
        const un = req.params.username;
        
        const user = new userAssetsModel({
            username:un,
            assetImage:req.body.assetImage,
            assetName:req.body.assetName
        })

        const userAssets = new userAssetsModel(user);
        const newUserAssets = await userAssets.save()
        res.status(201).json(newUserAssets)

    }catch{
        res.status(400).json({message:error.message})
    }
}



let getAssetsByUsername = async(req,res)=>{

    try{
        const un = req.params.username;
        const getAssetsByUsername = await userAssetsModel.find({username:un})
        res.status(201).json(getAssetsByUsername)
    }
    catch{
        res.status(400).json({message:error.message})
    }
}



module.exports = {getAllUserAssets,createUserAssets,getAssetsByUsername}