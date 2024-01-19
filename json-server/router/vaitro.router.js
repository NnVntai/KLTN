const {vaitro_controller}=require("../controller/vaitro.controller");
const apicache = require('apicache')
let cache = apicache.middleware
const router=require("express").Router();
//thêm vai trò
router.post("/insertVaiTro",vaitro_controller.insertvaitro);
//lấy thông tin vai trò
router.get("/getVaiTro",cache('1 minutes'),vaitro_controller.getvaitro);
//lấy id theo vai trò
router.post("/getVaiTroId",vaitro_controller.getvaitroid);
//update Vaitro 
router.post("/updateVaiTro",vaitro_controller.updatevaitro);
//xoa vai tro 
router.post("/xoavaitro",vaitro_controller.deleteVaiTro);

module.exports=router;