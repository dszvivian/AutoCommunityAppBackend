var mongoose = require('mongoose')
require('dotenv').config();

const mongoString = process.env.MONGO_URI || " ";

let conn;


const start = async ()=>{
    try{
        conn = await mongoose.connect(mongoString)
        console.log('MongoDb Altas Connected Successfully')
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = start;