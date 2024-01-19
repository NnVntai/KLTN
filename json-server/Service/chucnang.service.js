const {chucnang}=require("../model/chucnang.model");
const chucnang_service={
    getfunction:async(req)=>{
            const result=await chucnang.find({idHeThong:req.body.idHeThong},{id:1,tenChucNang:1,mucDich:1,idHeThong:1});    
            return result;
    },
    deletefunction:async(req)=>{
            const saveAuthor=await chucnang.deleteMany({id:req.body.id,idHeThong:req.body.idHeThong});
            return saveAuthor;
    },
    getinforfunction:async(req)=>{
            const getuser=await chucnang.find({idHeThong:req.body.idHeThong,id:req.body.id},{id:1,tenChucNang:1,mucDich:1,idHeThong:1});
            return getuser;
    },
    insertfunction:async(req)=>{
            const admin=await chucnang.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
            const insert_d=new  chucnang(req.body);
            const saveAuthor=await insert_d.save();
            return saveAuthor;
    },
    updateChucNang:async(req)=>{
             const doc = await chucnang.findOne({id:req.body.id});
                const returne=await doc.updateOne({
                tenChucNang:req.body.tenChucNang,
                mucDich:req.body.mucDich,
            });
        return returne;
    },checkChucNang:async(req)=>{
        
            const getuser=await chucnang.find({idHeThong:req.body.idHeThong,tenChucNang:req.body.tenChucNang},
                {id:1,tenChucNang:1,mucDich:1,idHeThong:1});
            return getuser;
       
    }
}
module.exports={chucnang_service};