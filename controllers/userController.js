var userModel = require("../models/user.js")

let getUsers = (req,res)=>{
    userModel.find().then(foundUsers =>{
        res.json({
            message:"All Users",
            users: foundUsers
        });
    });
}

let createuser = (req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new userModel({
        username:username,
        email:email,
        password:password
    })

    newUser.save().then(userSaved=>{
        res.status(201).json({
            message:"User Created Successfully",
            user: userSaved
        })
    })
}

module.exports = {getUsers,createuser}