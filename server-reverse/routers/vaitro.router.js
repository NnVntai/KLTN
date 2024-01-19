const {vaitro_controller}=require("../controller/vaitro.controller");
const apicache = require('apicache')
let cache = apicache.middleware
const router=require("express").Router();
//thêm vai trò
router.post("/insertVaiTro",vaitro_controller.insertvaitro);
//lấy thông tin vai trò
router.get("/getVaiTro",cache('2 minutes'),vaitro_controller.getvaitro);
//lấy id theo vai trò
router.post("/getVaiTroId",vaitro_controller.getvaitroid);

module.exports=router;