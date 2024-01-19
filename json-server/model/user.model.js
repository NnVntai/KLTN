const {mongodbconnet}= require('../config/config');
const mongoose=require("mongoose");
const NguoiQuanTri=new mongoose.Schema({
    id:{type:Number},
    hoTen:{type:String},
    ngaySinh:{type:Date},
    tenCongTy:{type:String},
    chucDanh:{type:String},
    username:{type:String},
    password:{type:String},
    idVaiTro:{type:Number},
    idHeThong:{type:Number}
})
let nguoiquantri=mongoose.model("NguoiQuanTri",NguoiQuanTri);
module.exports={nguoiquantri};