// Schema(modal) For Users

const mongoose = require('mongoose')

let schema = new  mongoose.Schema(
    {
        username: {
            type: String,
            required:true,
            unique:true,
            trim:true
        },
        email: {
            type: String,
            required:true,
            unique:true,
            trim:true
        },
        password: {
            type: String,
            required:true,
            trim:true
        },
        pName:{
            type:String,
            default:"Mr.XXXXX"
        },
        pPicture:{
            type:String,
            default:"https://www.shutterstock.com/image-vector/rider-front-view-on-yellow-260nw-2133689475.jpg"
        },
        pDescription:{
            type:String,
            default:"No plans. No maps. No GPS. Just ride."
        }
    }
);

let userModel = mongoose.model("user",schema)

module.exports = userModel;