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
        }
    }
);

let userModel = mongoose.model("user",schema)

module.exports = userModel;