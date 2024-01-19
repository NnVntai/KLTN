const {nguoiquantri}=require("../model/user.model");
var _JWT=require('../JWT/_JWT');
const requestIP = require('request-ip');
const login_controller={
    login:async(req,res)=>{
        try {
            var clientIp = requestIP.getClientIp(req);

            console.log(clientIp);
            console.log(req.body.username);
            const rate_get=await nguoiquantri.find({username:req.body.username,password:req.body.password},{ id: 1, hoTen: 1, idVaiTro: 1 ,idHeThong: 1,chucDanh:1,tenCongTy:1,username:1});
            if(rate_get!=""){
                const _token=await _JWT.make(rate_get); 
                res.status(200).json({user:rate_get,_token:_token,status:true}); 
            }else{
                res.status(200).json({user:"",_token:"",status:false});  
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}
module.exports={login_controller};