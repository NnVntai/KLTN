
const { Timestamp, Int32 } = require("mongodb");
const {mongodbconnet}= require('../config/config');
const mongoose=require("mongoose");

const DanhGia=new mongoose.Schema({
    id:{type:Number},
    idChucNang:{type:Number},
    ngayDanhGia:{type:Date},
    idNguoiDanhGia:{type:Number},   
    chiTietDanhGia:[{
        id:{type:Number}    ,
        tenDanhGia:{type:String},
        ketQuaDanhGia:{type:String},
        idKieuDanhGia:{type:String}
    }]
})
const KieuDanhGia=new mongoose.Schema({
   id:{type:Number},
   tenKieuDanhGia:{type:String}
})
const NguoiDanhGia=new mongoose.Schema({
    id:{type:Number},
    hoTen:{type:String},
    maUser:{type:String},
    idHeThong:{type:Number}
 })
 const ChiTietNoiDungdanhGia=new mongoose.Schema({
    id:{type:Number},
    mucDoUuTien:{type:Number},
    idHeThong:{type:Number},
    idKieuDanhGia:{type:Number},
    tenDanhGia:{type:String}
 })
let danhgia=mongoose.model("DanhGia",DanhGia);
let kieudanhgia=mongoose.model("KieuDanhGia",KieuDanhGia);
let nguoidanhgia=mongoose.model("NguoiDanhGia",NguoiDanhGia);
let chitietnoidungdanhgia=mongoose.model("ChiTietNoiDungdanhGia",ChiTietNoiDungdanhGia);
module.exports={danhgia,kieudanhgia,nguoidanhgia,chitietnoidungdanhgia};