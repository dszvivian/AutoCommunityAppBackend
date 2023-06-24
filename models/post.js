//schema(modal) for Post

const mongoose = require('mongoose')

let schema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        postImage:{
            type:String,
            required:true
        }
    }
)

let post = mongoose.model("post",schema)

module.exports = post;