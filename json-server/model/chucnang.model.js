const {mongodbconnet}= require('../config/config');
const { Timestamp, Int32 } = require("mongodb");
const mongoose=require("mongoose");
const ChucNang=new mongoose.Schema({
    id:{ type:Number},
    tenChucNang:{type:String},
    mucDich:{type: String},
    idHeThong:{type:Number}
})
let chucnang=mongoose.model("ChucNang",ChucNang);
module.exports={chucnang};