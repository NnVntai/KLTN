const {user_controller}=require("../controller/user.controller");
const apicache = require('apicache')
let cache = apicache.middleware
const router=require("express").Router();

//thay doi thong tin user
router.post("/changeuser",user_controller.changeuser);
//lay tat ca vai tro 
router.get("/getUserVaiTro",cache('2 minutes'),user_controller.getUserVaiTro)
//them nguoi dung voi vao
router.post("/insertuser",user_controller.insertuser);
//them vai tro moi vao

//kiem tra user nam co ton tai hay khong
router.post("/checkusername",user_controller.checkusername);
//lay tat ca user name
router.get("/getUser",cache('2 minutes'),user_controller.getUser);
//thay doi mat khau
router.post("/changepassword",user_controller.changepassword);
//lay thong tin he thong

//lay don le thong tin cua mot user truyen qua id
router.post("/getinforuser",user_controller.getinforuser);
//detele user 
router.post("/deleteuser",user_controller.deleteuser);
//check  pass 
router.post("/checkpass",user_controller.checkpassword);

module.exports=router;
