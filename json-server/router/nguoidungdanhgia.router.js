const {nguoidungdanhgia_controller}=require("../controller/nguoidungdanhgia.controller");

const router=require("express").Router();

//lay noi dung danh gia
router.post("/getlistnguoidungdanhgia",nguoidungdanhgia_controller.getlistnguoidungdanhgia);


module.exports =router;