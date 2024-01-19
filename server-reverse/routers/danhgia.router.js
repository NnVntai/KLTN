const {danhgia_controller}=require("../controller/danhgia.controller");
const { chucnang_controller}=require("../controller/chucnang.controller");
const { hethong_controller}=require("../controller/hethong.controller");
const { noidungdanhgia_controller}=require("../controller/noidungdanhgia.controller");
const apicache = require('apicache')
let cache = apicache.middleware
const router=require("express").Router();
//kiểm tra mã hệ thống đánh giá
router.post("/checkmahethongdanhgia",hethong_controller.getinforsysdanhgia2);
//lấy các chức năng đánh giá người dùng của hệ thống nào đó
router.post("/getchucnangdanhgianguoidungs",danhgia_controller.getdanhgiachucnangnguoidung);
//lấy giao diện người đánh giá
router.post("/getgiaodienDanhGiaiChucNang",danhgia_controller.getgiaodienDanhGiaiChucNang);

router.post("/deletedanhgia",danhgia_controller.deleteDanhGia)
//lấy thông tin người đánh giá
router.post("/getnguoidanhgia",danhgia_controller.getthongtinnguoidanhgia);
//thêm người đánh giá
router.post("/insertnguoidanhgia",danhgia_controller.insertnguoidanhgia);
//thêm đánh giá 
router.post("/insertdanhgianguoidung",danhgia_controller.insertdanhgianguoidung);
//lấy giao diện đánh giá không có người dùng
router.post("/getgiaodiendanhgiakhongconguoidung",danhgia_controller.getgiaodiendanhgiakhongconguoidung);
//cập nhật đánh giá
router.post("/capnhatdanhgianguoidung",danhgia_controller.capnhatdanhgianguoidung);
//get danh sach danh gia
router.post("/getdanhgiadmin",danhgia_controller.getdanhgiadmin);

router.post("/getgiaodiendanhgianoidung",noidungdanhgia_controller.getgiaodiendanhgianoidung);

module.exports=router;