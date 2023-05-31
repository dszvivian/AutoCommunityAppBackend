// Schema(modal) For Users

const mongoose = require('mongoose')

let schema = mongoose.Schema(
    {
        username: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    }
);

let userModel = mongoose.model("user",schema)

module.exports = userModel;