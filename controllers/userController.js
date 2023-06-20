var userModel = require("../models/user.js")

let getAllUsers = async(req,res)=>{
    try{
        const getAllUsers = await userModel.find()
        res.status(201).json(getAllUsers)
    }
    catch{
        res.status(400).json({message:error.message})
    }
}

let createuser = async(req,res)=>{

    try{
        const user = new userModel(req.body);
        const newUser = await user.save()
        res.status(201).json(newUser)

    }catch{
        res.status(400).json({message:error.message})
    }
}

//get individual json object 
let getUserbyUsername = async(req,res)=>{
    try{
        const un = req.params.username;
        const getUser = await userModel.find({username:un})
        res.status(201).json(getUser)
    }
    catch{
        res.status(400).json({message:error.message})
    }
}


let updateUserDetails = async(req,res)=>{
    try{
        const un = req.params.username;
        const filter = {username:un};
        const newValues = { $set : {
            pName:req.body.pName,
            pPicture:req.body.pDescription
        }}
        userModel.updateOne(
            filter,
            newValues
        ).then(
            res.status(201).json({message:"Successfully Updated User"})
        )
    }catch{
        res.status(400).json({message:error.message})
    }
}


module.exports = {getAllUsers,createuser,getUserbyUsername,updateUserDetails}