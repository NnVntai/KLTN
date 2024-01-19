const { kieudanhgia}=require("../model/danhgia.model");
const kieudanhgia_controller={
    insertkieudanhgia:async(req,res)=>{
        try {
            const admin=await kieudanhgia.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
                const insert_d=new  kieudanhgia(req.body);
                 const saveAuthor=await insert_d.save(function(err){ });
                 res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getkieudanhgia:async(req,res)=>{
        try {
            const rate_get=await kieudanhgia.find({});
            res.status(200).json(rate_get);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getinforkieudanhgia:async(req,res)=>{
        try {
            const rate_get=await kieudanhgia.find({id:req.body.id});
            res.status(200).json(rate_get);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deletekieudanhgia:async(req,res)=>{
        try {
            const getuser=await kieudanhgia.deleteMany({id:req.body.id});
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updatekieudanhgia:async(req,res)=>{
        try {
            const doc = await kieudanhgia.findOne({id:req.body.id});
            const returne=await doc.updateOne({tenKieuDanhGia:req.body.tenKieuDanhGia});
            res.status(200).json(1);
          } catch (error) {
              res.status(500).json(error);
          }
    },
}
module.exports={kieudanhgia_controller};