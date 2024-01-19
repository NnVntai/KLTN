const {hethong}=require("../model/hethong.model");
const hethong_controller={
    getHethong:async(req,res)=>{
         try {
            const gethethong=await hethong.find();
            res.status(200).json(gethethong);
          } catch (error) {
             res.status(500).json(error);
          }
    },
    insertsystem:async(req,res)=>{
        try {
            const admin=await hethong.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
            const insert_d=new  hethong(req.body);
             const saveAuthor=await insert_d.save(function(err){
             });
             res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
   deletesys:async(req,res)=>{
        try {
            const getuser=await hethong.deleteMany({id:req.body.id});
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    changesys:async(req,res)=>{
        try {
            const doc = await hethong.findOne({id:req.body.id});
            const returne=await doc.updateOne( {id:req.body.id,tenHeThong:req.body.tenHeThong,maKetNoi:req.body.maKetNoi});
            res.status(200).json(1);
          } catch (error) {
              res.status(500).json(error);
          }
    },
    checksys:async(req,res)=>{
        try {
            const getuser=await hethong.find({id:req.body.id},{ tenHeThong: 1,maKetNoi:1});
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getinforsys:async(req,res)=>{
        try {
            const getuser=await hethong.find({id:req.body.id},{id:1, tenHeThong: 1,maKetNoi:1,ipHeThong:1});
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    },  getinforsysdanhgia:async(req,res)=>{
        try {
            const getuser=await hethong.find({maKetNoi:req.body.maKetNoi},{id:1, tenHeThong: 1,maKetNoi:1});
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
module.exports={hethong_controller};