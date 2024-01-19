let isAuth=async function(req, res, next ){
    var _JWT=require('../JWT/_JWT');
    var _token= req.headers.authorization;
    if(_token){
        try {
            var audata=await _JWT.check(_token);
            req.auth=audata;
            next();
        } catch (error) {
            console.log(error);
            return res.send({_token:12});
        }
    }
        else{
            return res.send({_token:1});}
}
module.exports = {
    isAuth:isAuth,
}