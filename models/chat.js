//schema(modal) for chat

const mongoose = require('mongoose')

let schema = new mongoose.Schema(
    {
        sender_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        },
        reciever_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        },
        message:{
            type:String,
            required:true
        }
    },{
        timestamps:true
    }
)

let post = mongoose.model("chat",schema)

module.exports = post;