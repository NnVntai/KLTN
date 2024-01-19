const { kieudanhgia}=require("../model/danhgia.model");
const kieudanhgia_service={
    insertkieudanhgia:async(req)=>{
        
            const admin=await kieudanhgia.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
                const insert_d=new  kieudanhgia(req.body);
                 const saveAuthor=await insert_d.save(function(err){ });
                 return saveAuthor;
       
    },
    getkieudanhgia:async(req)=>{

            const rate_get=await kieudanhgia.find({});
            return rate_get;
    },
    getinforkieudanhgia:async(req)=>{
      
            const rate_get=await kieudanhgia.find({id:req.body.id});
    
            return rate_get;
       
    },
    deletekieudanhgia:async(req)=>{
       
            const getuser=await kieudanhgia.deleteMany({id:req.body.id});
            return getuser;
    },
    updatekieudanhgia:async(req)=>{
   
            const doc = await kieudanhgia.findOne({id:req.body.id});
            const returne=await doc.updateOne({tenKieuDanhGia:req.body.tenKieuDanhGia});
            return returne;
         
    },
}
module.exports={kieudanhgia_service};