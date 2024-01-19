const {login_controller}=require("../controller/login.controller");
const router=require("express").Router();
const apicache = require('apicache')
let cache = apicache.middleware
//đăng nhập

router.post("/login",login_controller.login);

module.exports=router;
