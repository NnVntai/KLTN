const {nguoiquantri}=require("../model/user.model");
const user_controller={
    
    insertuser:async(req,res)=>{
        try {
            const admin=await nguoiquantri.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
            const insert_d=new  nguoiquantri(req.body);
            const returne=await insert_d.save();
             res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    changeuser:async(req,res)=>{
        try {
            const doc = await nguoiquantri.findOne({id:req.body.id});
            const returne=await doc.updateOne({
                tenCongTy:req.body.tenCongTy,
                ngaySinh:req.body.ngaySinh,
                chucDanh:req.body.chucDanh,
                hoTen:req.body.hoTen,
            });
            res.status(200).json(1);
          } catch (error) {
            console.log(error);
              res.status(500).json(error);
          }
    },
    changepassword:async(req,res)=>{
        try {
            const doc = await nguoiquantri.findOne({id:req.body.id});
            const returne=await doc.updateOne({password:req.body.password});
            if(returne.modifiedCount>0)
            {
                res.status(200).json(1);
            }else {
                res.status(200).json(2);
            }
          } catch (error) {
             res.status(500).json(error);
          } 
    },
    getUser:async(req,res)=>{
        try {
            const getuser=await nguoiquantri.find({},{ 
                id: 1, 
                hoTen: 1, 
                idVaiTro: 1 ,
                ngaySinh:1,
                idHeThong: 1,
                username:1,
                tenCongTy:1,
                chucDanh:1});
            res.status(200).json(getuser);
          } catch (error) {
             res.status(500).json(error);
          }
    },
    checkusername:async(req,res)=>{
        try {
            const getuser=await nguoiquantri.find({username:req.body.username},{ hoTen: 1});
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    ,getinforuser:async(req,res)=>{
        try {
            const getuser=await nguoiquantri.find({id:req.body.id},{
                 id: 1, 
                 hoTen: 1,
                  idVaiTro: 1,
                  idHeThong: 1,
                  username:1,
                  tenCongTy:1,
                  chucDanh:1 ,
                  ngaySinh:1});
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    },deleteuser:async(req,res)=>{
        try {
            const getuser=await nguoiquantri.deleteMany({id:req.body.id});
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    checkpassword:async(req,res)=>
    {
        try {
            console.log(req.body);
            const getuser=await nguoiquantri.find({id:req.body.id,password:req.body.password},{ hoTen: 1});
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    },getUserVaiTro:async(req,res)=>{
        try {
            const getuser=await  nguoiquantri.aggregate(
                [{ $lookup:
                    {
                       from: "vaitros",
                       localField: "idVaiTro",
                       foreignField: "id",
                       as: "VaiTro"
                    }
                },{ $lookup:
                    {
                       from: "hethongs",
                       localField: "idHeThong",
                       foreignField: "id",
                       as: "HeThong"
                    }
                }]
            );
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports={user_controller};