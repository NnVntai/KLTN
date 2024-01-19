const {noidungdanhgia_controller}=require("../controller/noidungdanhgia.controller");
const apicache = require('apicache')
let cache = apicache.middleware
const router=require("express").Router();

router.post("/getnoidungdanhgia",noidungdanhgia_controller.getnoidungdanhgia);
//xoa noi dung danh gia
router.post("/deletenoidungdanhgia",noidungdanhgia_controller.deletenoidungdanhgia);
//xoa noi dung danh gia
router.post("/insertnoidungdanhgia",noidungdanhgia_controller.insertnoidungdanhgia);
//cap nhat noidung danh gia
router.post("/updatenoidungdanhgia",noidungdanhgia_controller.updatenoidungdanhgia);
//get chi tiet noi dung danh gia
router.post("/getinfornoidungdanhgia",noidungdanhgia_controller.getinfornoidungdanhgia);


module.exports =router;