const {hethong}=require("../model/hethong.model");
const hethong_service={
    getHethong:async(req)=>{
            const gethethong=await hethong.find();
            return gethethong;       
    },
    insertsystem:async(req)=>{
            const admin=await hethong.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
            const insert_d=new  hethong(req.body);
             const saveAuthor=await insert_d.save(function(err){
             });
             return saveAuthor; 
    },
   deletesys:async(req)=>{
            const getuser=await hethong.deleteMany({id:req.body.id});
            return getuser; 
    },
    changesys:async(req)=>{
            const doc = await hethong.findOne({id:req.body.id});
            const returne=await doc.updateOne( {id:req.body.id,tenHeThong:req.body.tenHeThong,maKetNoi:req.body.maKetNoi});
            return returne; 
    },
    checksys:async(req)=>{
    
            const getuser=await hethong.find({id:req.body.id},{ tenHeThong: 1,maKetNoi:1});
            return getuser; 
       
    },
    getinforsys:async(req)=>{
  
            const getuser=await hethong.find({id:req.body.id},{id:1, tenHeThong: 1,maKetNoi:1,ipHeThong:1});
            return getuser; 
       
    },  getinforsysdanhgia:async(req)=>{
     
            const getuser=await hethong.find({maKetNoi:req.body.maKetNoi},{id:1, tenHeThong: 1,maKetNoi:1});
            return getuser; 
       
    }
};
module.exports={hethong_service};