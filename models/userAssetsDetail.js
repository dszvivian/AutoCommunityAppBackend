// Schema(modal) For User Assets Details 

const mongoose = require('mongoose')

let schema = new  mongoose.Schema(
    {
        username: {
            type: String,
            required:true
        },
        assetImage: {
            type: String,
            required:true
        },
        assetName: {
            type: String,
            required:true
        }
    }
);

let userModel = mongoose.model("userDetail",schema)

module.exports = userModel;