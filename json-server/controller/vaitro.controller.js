const {vaitro}=require("../model/vaitro.model")
const vaitro_controller={
    insertvaitro:async(req,res)=>{
        try {
         
            const admin=await vaitro.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
            const insertvaitro=new vaitro(req.body);
            const returne=await insertvaitro.save();
            res.status(200).json(1);
          } catch (error) {
            console.log(error);
              res.status(500).json({error});
          }
    },
    getvaitro:async(req,res)=>{
        try {
            
            const get_vaitro=await vaitro.find({});
            res.status(200).json(get_vaitro);
        } catch (error) {
            res.status(500).json({error});
        }
    },
    getvaitroid:async(req,res)=>{
        try {
            const get_vaitro=await vaitro.find({id:req.body.id});
            res.status(200).json(get_vaitro);
        } catch (error) {
            res.status(500).json({error});
        }
    },updatevaitro:async(req,res)=>{
        try {
            const doc = await vaitro.findOne({id:req.body.id});
            const returne=await doc.updateOne({tenVaiTro:req.body.tenVaiTro});
            res.status(200).json(1);
          } catch (error) {
              res.status(500).json({error});
          }
    },
    deleteVaiTro:async(req,res)=>{
        try {
            const getuser=await vaitro.deleteMany({id:req.body.id});
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json({error});
        }
    }

}
module.exports={vaitro_controller};