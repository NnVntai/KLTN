const {mongodbconnet}= require('../config/config');
const mongoose=require("mongoose");
const HeThong=new mongoose.Schema({
    id:{type:Number},
    tenHeThong: {type:String},
    maKetNoi:{type:String},
    ipHeThong:{type:String}
});
let hethong=mongoose.model("Hethong",HeThong);
module.exports={hethong};