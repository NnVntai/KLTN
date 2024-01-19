
const {danhgia,kieudanhgia,nguoidanhgia}=require("../model/danhgia.model");
const requestIP = require('request-ip');
const {hethong}=require("../model/hethong.model");
const {chucnang}=require("../model/chucnang.model");

const danhgia_controller={
    getgiaodienDanhGiaiChucNang:async(req,res)=>{
        try {
            if(req.headers.authorization)
            {
                const result=await danhgia.find({idChucNang:req.body.idChucNang,idNguoiDanhGia:req.body.idNguoiDanhGia});
                 res.status(200).json(result);
            }else{
                var clientIp = requestIP.getClientIp(req);
                const checkip=await hethong.find({ipHeThong:clientIp});
                if(checkip.length>0)
                {
                    const result=await danhgia.find({idChucNang:req.body.idChucNang,idNguoiDanhGia:req.body.idNguoiDanhGia});
                     res.status(200).json(result);
                }
            } 
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    deleteDanhGia:async(req,res)=>{
        try {
            if(req.headers.authorization)
            {
            const saveAuthor=await danhgia.deleteMany({id:req.body.id});
            res.status(200).json(1);
        }else{
            var clientIp = requestIP.getClientIp(req);
            const checkip=await hethong.find({ipHeThong:clientIp});
            if(checkip.length>0)
            { 
                const saveAuthor=await danhgia.deleteMany({id:req.body.id});
            res.status(200).json(1);
            }}

        } catch (error) {
            res.status(500).json(error);
        }
    },
    getInforDanhGia:async(req,res)=>{
        try {
            if(req.headers.authorization)
            {
            const getuser=await danhgia.find({idChucNang:req.body.idChucNang,id:req.body.id});
            res.status(200).json(getuser);
        }else{
            var clientIp = requestIP.getClientIp(req);
            const checkip=await hethong.find({ipHeThong:clientIp});
            if(checkip.length>0)
            {
                const getuser=await danhgia.find({idChucNang:req.body.idChucNang,id:req.body.id});
                res.status(200).json(getuser);
             }}
        } catch (error) {
            res.status(500).json(error);
        }
    },
    capNhatDanhGia:async(req,res)=>{
        try {
            if(req.headers.authorization)
            {
            const newrate=new danhgia(req.body);
            const getuser=await danhgia.find({id:req.body.id});
            const upate=await getuser.updateOne(newrate)
            res.status(200).json(1);
        }else{
            var clientIp = requestIP.getClientIp(req);
            const checkip=await hethong.find({ipHeThong:clientIp});
            if(checkip.length>0)
            {
                const newrate=new danhgia(req.body);
            const getuser=await danhgia.find({id:req.body.id});
            const upate=await getuser.updateOne(newrate)
            res.status(200).json(1);
        }}
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getdanhgiachucnangnguoidung:async(req,res)=>
    {
        try {
            if(req.headers.authorization)
            {
            const saveAuthor=await chucnang.aggregate([{ $match : { idHeThong : req.body.idHeThong }},{ $lookup:
                {
                   from: "danhgias",
                    pipeline: [
                                    { $match: { idNguoiDanhGia:req.body.idNguoiDanhGia } }
                                ],
                   localField: "id",
                   foreignField: "idChucNang",
                   as: "DanhGia"
                }
            }]) 
            res.status(200).json(saveAuthor);
        }else{
            var clientIp = requestIP.getClientIp(req);
            const checkip=await hethong.find({ipHeThong:clientIp});
            if(checkip.length>0)
            {
                const saveAuthor=await chucnang.aggregate([{ $match : { idHeThong : req.body.idHeThong }},{ $lookup:
                    {
                       from: "danhgias",
                        pipeline: [
                                        { $match: { idNguoiDanhGia:req.body.idNguoiDanhGia } }
                                    ],
                       localField: "id",
                       foreignField: "idChucNang",
                       as: "DanhGia"
                    }
                }]) 
                res.status(200).json(saveAuthor);
            }}
        } catch (error) {
            res.status(500).json(error);
        }
    },getthongtinnguoidanhgia:async(req,res)=>
    {

        try {
            if(req.headers.authorization)
            {
            const getuser=await nguoidanhgia.find({maUser:req.body.maUser});
            res.status(200).json(getuser);
        }else{
            var clientIp = requestIP.getClientIp(req);
            const checkip=await hethong.find({ipHeThong:clientIp});
            if(checkip.length>0)
            {
                const getuser=await nguoidanhgia.find({maUser:req.body.maUser});
                res.status(200).json(getuser);
            }}
        } catch (error) {
            res.status(500).json(error);
        }
    },insertnguoidanhgia:async(req,res)=>{
        try {
            if(req.headers.authorization)
            {
            const admin=await nguoidanhgia.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
            const insert_d=new  nguoidanhgia(req.body);
            const saveAuthor=await insert_d.save();
            res.status(200).json(saveAuthor);
        }else{
            var clientIp = requestIP.getClientIp(req);
            const checkip=await hethong.find({ipHeThong:clientIp});
            if(checkip.length>0)
            {
                const admin=await nguoidanhgia.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
            const insert_d=new  nguoidanhgia(req.body);
            const saveAuthor=await insert_d.save();
            res.status(200).json(saveAuthor);
            }}
        } catch (error) {
            res.status(500).json(error);
        }
    },
    insertdanhgianguoidung:async(req,res)=>{
        try {
            if(req.headers.authorization)
            {
            const admin=await danhgia.find({},{id:1}).sort({id:-1}).limit(1);
            if(admin==''){
                req.body.id=1;
            }else{
                req.body.id=admin[0].id+1;
            }
            console.log( req.body);
            const insert_d=new danhgia(req.body);
            const saveAuthor=await insert_d.save();
            res.status(200).json(1);
        }else{
            var clientIp = requestIP.getClientIp(req);
            const checkip=await hethong.find({ipHeThong:clientIp});
            if(checkip.length>0)
            {
                const admin=await danhgia.find({},{id:1}).sort({id:-1}).limit(1);
                if(admin==''){
                    req.body.id=1;
                }else{
                    req.body.id=admin[0].id+1;
                }
                console.log( req.body);
                const insert_d=new danhgia(req.body);
                const saveAuthor=await insert_d.save();
                res.status(200).json(1);
            }}
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getgiaodiendanhgiakhongconguoidung:async(req,res)=>{
        try {
            if(req.headers.authorization)
            {
            const insert_d=await danhgia.aggregate(
                [{ $sort : { id : 1 } },{$limit:1},{$match:{idChucNang:req.body.idChucNang}} ] 
           )
           res.status(200).json(insert_d);
        }else{
            var clientIp = requestIP.getClientIp(req);
            const checkip=await hethong.find({ipHeThong:clientIp});
            if(checkip.length>0)
            {
                const insert_d=await danhgia.aggregate(
                    [{ $sort : { id : 1 } },{$limit:1},{$match:{idChucNang:req.body.idChucNang}} ] 
               )
               res.status(200).json(insert_d);
            }}
        } catch (error) {
            res.status(500).json(error);
        }
    },
    capnhatdanhgianguoidung:async(req,res)=>
    {
        try {
            if(req.headers.authorization)
            {
            const upate=await danhgia.updateOne({id:req.body.id},{$set:{chiTietDanhGia:req.body.chiTietDanhGia
            }});
            res.status(200).json(1);
        }else{
            var clientIp = requestIP.getClientIp(req);
            const checkip=await hethong.find({ipHeThong:clientIp});
            if(checkip.length>0)
            {
                const upate=await danhgia.updateOne({id:req.body.id},{$set:{chiTietDanhGia:req.body.chiTietDanhGia
                }});
                res.status(200).json(1);
            }}
        } catch (error) {
            res.status(500).json(error);
        }
    },getdanhgiadmin:async(req,res)=>{
        try {
            if(req.headers.authorization)
            {
            const getrow=await danhgia.aggregate([{$match:{idChucNang: {$in :req.body.arr}}},
                { $lookup:
                {
                   from: "chucnangs",
                   localField: "idChucNang",
                   foreignField: "id",
                   as: "chucNang"
                }
            }, { $lookup:
                {
                   from: "nguoidanhgias",
                   localField: "idNguoiDanhGia",
                   foreignField: "id",
                   as: "nguoiDanhGia"
                }
            }
    ]); 
            res.status(200).json(getrow);
        }else{
            var clientIp = requestIP.getClientIp(req);
            const checkip=await hethong.find({ipHeThong:clientIp});
            if(checkip.length>0)
            {
                const getrow=await danhgia.aggregate([{$match:{idChucNang: {$in :req.body.arr}}},
                    { $lookup:
                    {
                       from: "chucnangs",
                       localField: "idChucNang",
                       foreignField: "id",
                       as: "chucNang"
                    }
                }, { $lookup:
                    {
                       from: "nguoidanhgias",
                       localField: "idNguoiDanhGia",
                       foreignField: "id",
                       as: "nguoiDanhGia"
                    }
                }
        ]); 
                res.status(200).json(getrow);
            }}
        } catch (error) {
            res.status(500).json(error);
        } 
    }
}
module.exports={danhgia_controller};