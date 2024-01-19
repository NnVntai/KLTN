const {chucnang_controller}=require("../controller/chucnang.controller");
const apicache = require('apicache')
let cache = apicache.middleware
const router=require("express").Router();
//thêm mới chức năng
router.post("/insertChucNang",chucnang_controller.insertfunction);
//lấy chức năng 
router.post("/getChucNang",chucnang_controller.getfunction);

// router.post("/getchucnangdanhgia",chucnang_controller.getfunction);
//xóa chức năng 
router.post("/deleteChucNang",chucnang_controller.deletefunction);
//lấy thông tin chi tiết chức năng
router.post("/getThongTinChiTietChucNang",chucnang_controller.getinforfunction);
//cấp nhật chức năng
router.post("/updateChucNang",chucnang_controller.updateChucNang);
//kiểm tra thông tin có trùng với chức năng khác hay không
router.post("/checkChucNang",chucnang_controller.checkChucNang);


module.exports=router;