const { chitietnoidungdanhgia}=require("../model/danhgia.model");
const noidungdanhgia_controller={
    insertnoidungdanhgia:async(req,res)=>{
    
            const admin=await chitietnoidungdanhgia.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
                const insert_d=new  chitietnoidungdanhgia(req.body);
                 const saveAuthor=await insert_d.save(function(err){ });
               
            return saveAuthor
    },
    getnoidungdanhgia:async(req)=>{
        
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
         return rate_get;
       
    },
    getinfornoidungdanhgia:async(req)=>{
  
            const rate_get=await chitietnoidungdanhgia.find({id:req.body.id});
            
            return rate_get;
    },
    deletenoidungdanhgia:async(req)=>{
      
            const getuser=await chitietnoidungdanhgia.deleteMany({id:req.body.id});
            return getuser;
      
    },
    updatenoidungdanhgia:async(req)=>{
     
            const doc = await chitietnoidungdanhgia.findOne({id:req.body.id});
            const returne=await doc.updateOne({mucDoUuTien:req.body.mucDoUuTien,idKieuDanhGia:req.body.idKieuDanhGia,tenDanhGia:req.body.tenDanhGia});
            return returne;
         
    },
    getgiaodiendanhgianoidung:async(req,res)=>{
            const rate_get=await chitietnoidungdanhgia.find({idHeThong:req.body.idHeThong}).sort({mucDoUuTien:1});
            return rate_get;
        
    },
   
}
module.exports={noidungdanhgia_controller};