const {hethong_controller}=require("../controller/hethong.controller");
const router=require("express").Router();
const apicache = require('apicache')
let cache = apicache.middleware
//lấy tất cả hệ thống
router.get("/getHeThong",cache('1 minutes'),hethong_controller.getHethong);
//thêm mới hệ thống
router.post("/insertHeThong", hethong_controller.insertsystem);
//cập nhật hệ thống
router.post("/capNhatHeThong", hethong_controller.changesys);
//xóa hệ thống
router.post("/xoaHeThong",hethong_controller.deletesys);
//kiểm tra hệ thống
router.post("/kiemTraHeThong",hethong_controller.checksys);
//lấy thông tin chi tiết hệ thống
router.post("/layThongTinChiTietHeThong",hethong_controller.getinforsys);
//kiểm tra mã hệ thống
router.post("/checkhethongdanhgia",hethong_controller.getinforsysdanhgia);

module.exports=router;