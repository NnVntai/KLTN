const { chitietnoidungdanhgia}=require("../model/danhgia.model");
const noidungdanhgia_controller={
    insertnoidungdanhgia:async(req,res)=>{
        try {
            const admin=await chitietnoidungdanhgia.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
                const insert_d=new  chitietnoidungdanhgia(req.body);
                 const saveAuthor=await insert_d.save(function(err){ });
                 res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getnoidungdanhgia:async(req,res)=>{
        try {
            const rate_get=await chitietnoidungdanhgia.aggregate(
                [{ $lookup:
                    {
                       from: "kieudanhgias",
                       localField: "idKieuDanhGia",
                       foreignField: "id",
                       as: "kieuDanhGia"
                    }
                },{ $lookup:
                    {
                       from: "hethongs",
                       localField: "idHeThong",
                       foreignField: "id",
                       as: "heThong"
                    }
                }]
            );
            res.status(200).json(rate_get);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getinfornoidungdanhgia:async(req,res)=>{
        try {
            const rate_get=await chitietnoidungdanhgia.find({id:req.body.id});
            res.status(200).json(rate_get);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deletenoidungdanhgia:async(req,res)=>{
        try {
            const getuser=await chitietnoidungdanhgia.deleteMany({id:req.body.id});
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updatenoidungdanhgia:async(req,res)=>{
        try {
            const doc = await chitietnoidungdanhgia.findOne({id:req.body.id});
            const returne=await doc.updateOne({mucDoUuTien:req.body.mucDoUuTien,idKieuDanhGia:req.body.idKieuDanhGia,tenDanhGia:req.body.tenDanhGia});
            res.status(200).json(1);
          } catch (error) {
              res.status(500).json(error);
          }
    },
    getgiaodiendanhgianoidung:async(req,res)=>{
        try {
            const rate_get=await chitietnoidungdanhgia.find({idHeThong:req.body.idHeThong}).sort({mucDoUuTien:1});
            res.status(200).json(rate_get);
          } catch (error) {
              res.status(500).json(error);
          }
    },
   
}
module.exports={noidungdanhgia_controller};