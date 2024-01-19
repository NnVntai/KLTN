const {mongodbconnet}= require('../config/config');

const mongoose=require("mongoose");
const VaiTro=new mongoose.Schema({
    id:{type:Number},
    tenVaiTro:{type:String}
})
let vaitro=mongoose.model("VaiTro",VaiTro);
module.exports={vaitro};