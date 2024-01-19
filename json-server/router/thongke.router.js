const {danhgia_controller}=require("../controller/danhgia.controller");
const { chucnang_controller}=require("../controller/chucnang.controller");
const {thongke_controller}=require("../controller/thongke.controller");
const { hethong_controller}=require("../controller/hethong.controller");
const router=require("express").Router();
// so lieu6 danh gia cu atoan he thong pie
router.post("/getsolieudanhgiachucnang",thongke_controller.getsolieudanhgiachucnang);
//lay so lieu danh gia so lieu danh gia  line
router.post("/getthongketheonamline",thongke_controller.getthongketheonamline);
// lay thong ketheo chuc nang 
router.post("/getthongkequantritheochucnang",thongke_controller.getthongkequantritheochucnang);

module.exports=router;