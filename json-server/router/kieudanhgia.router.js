const {kieudanhgia_controller}=require("../controller/kieudanhgia.controller");
const router=require("express").Router();
const apicache = require('apicache')
let cache = apicache.middleware
//lay noi dung danh gia
router.get("/getkieudanhgia",cache('1 minutes'),kieudanhgia_controller.getkieudanhgia);
//xoa noi dung danh gia
router.post("/deletekieudanhgia",kieudanhgia_controller.deletekieudanhgia);
//xoa noi dung danh gia
router.post("/insertkieudanhgia",kieudanhgia_controller.insertkieudanhgia);
//cap nhat noidung danh gia
router.post("/updatekieudanhgia",kieudanhgia_controller.updatekieudanhgia);
//get chi tiet noi dung danh gia
router.post("/getinforkieudanhgia",kieudanhgia_controller.getinforkieudanhgia);

module.exports =router;

