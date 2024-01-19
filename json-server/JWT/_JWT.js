const jwt=require("jsonwebtoken");
const access=require("./_APP");
let make=function(user){
    return new Promise(
        function(resolve, reject) {
            jwt.sign({data:user},access.ACCESS_TOKEN,{
                algorithm:"HS256",
                expiresIn:access.TOKEN_TIMEOUT,
            },function(err,res) {
                if(err){
                   return reject(err);     // ignore   error
                }
             return resolve(res);
            }
        );
})};
//check if tokenTimeout true false
const checktimeout = function(token){
    return new Promise(
        function(resolve, reject) {
            jwt.verify(token,access.ACCESS_TOKEN,function(err,data) {
                if( err){
                   return reject(err);
                    }
                    return resolve(data);
            }
            )});
} 
module.exports={
    make:make,
    check:checktimeout,
}