var userAssetsModel = require("../models/userAssetsDetail.js")


let getAllUserAssets = async(req,res)=>{
    try{
        const getAllUserAssets = await userModel.find()
        res.status(201).json(getAllUserAssets)
    }
    catch{
        res.status(400).json({message:error.message})
    }
}

let createUserAssets = async(req,res)=>{

    try{
        const userAssets = new userModel(req.body);
        const newUserAssets = await userAssets.save()
        res.status(201).json(newUserAssets)

    }catch{
        res.status(400).json({message:error.message})
    }
}

module.exports = {getAllUserAssets,createUserAssets}