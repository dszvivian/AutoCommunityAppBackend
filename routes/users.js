var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
require('dotenv').config();

const mongoString = "mongodb+srv://vivian:Jo9r2UonQ5dBfNeX@autocommunity.guejjvu.mongodb.net/";

const start = async ()=>{

  try{
    await mongoose.connect(mongoString)
    console.log('MongoDb Altas Connected Successfully')
  }catch(error){
    console.log(error)
    process.exit(1)
  }
}

start()


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({message:'Users Backend WOrking Pretty Fine..........Lesss GoooooOooO'});
});


module.exports = router;
