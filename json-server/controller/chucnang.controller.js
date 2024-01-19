
const {chucnang}=require("../model/chucnang.model");


const chucnang_controller={
    getfunction:async(req,res)=>{
        try {
            const result=await chucnang.find({idHeThong:req.body.idHeThong},{id:1,tenChucNang:1,mucDich:1,idHeThong:1});
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    deletefunction:async(req,res)=>{
        try {
            const saveAuthor=await chucnang.deleteMany({id:req.body.id,idHeThong:req.body.idHeThong});
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getinforfunction:async(req,res)=>{
        try {
            const getuser=await chucnang.find({idHeThong:req.body.idHeThong,id:req.body.id},{id:1,tenChucNang:1,mucDich:1,idHeThong:1});
            res.status(200).json(getuser);
       
        } catch (error) {
            res.status(500).json(error);
        } 
    },
    insertfunction:async(req,res)=>{
        try {
            const admin=await chucnang.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
            const insert_d=new  chucnang(req.body);
            const saveAuthor=await insert_d.save();
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateChucNang:async(req,res)=>{
        try {
             const doc = await chucnang.findOne({id:req.body.id});
                const returne=await doc.updateOne({
                tenChucNang:req.body.tenChucNang,
                mucDich:req.body.mucDich,
            });
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },checkChucNang:async(req,res)=>{
        try {
            const getuser=await chucnang.find({idHeThong:req.body.idHeThong,tenChucNang:req.body.tenChucNang},
                {id:1,tenChucNang:1,mucDich:1,idHeThong:1});
                res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error); 
        }
    }
}
module.exports={chucnang_controller};