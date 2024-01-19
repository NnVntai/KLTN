const {noidungdanhgia_controller}=require("../controller/noidungdanhgia.controller");
const router=require("express").Router();

//lay noi dung danh gia
router.post("/getnoidungdanhgia",noidungdanhgia_controller.getnoidungdanhgia);
//xoa noi dung danh gia
router.post("/deletenoidungdanhgia",noidungdanhgia_controller.deletenoidungdanhgia);
//xoa noi dung danh gia
router.post("/insertnoidungdanhgia",noidungdanhgia_controller.insertnoidungdanhgia);
//cap nhat noidung danh gia
router.post("/updatenoidungdanhgia",noidungdanhgia_controller.updatenoidungdanhgia);
//get chi tiet noi dung danh gia
router.post("/getinfornoidungdanhgia",noidungdanhgia_controller.getinfornoidungdanhgia);
//lay giao dien danh gia noi dung


module.exports =router;

