
const { nguoidanhgia }=require("../model/danhgia.model");
const nguoidungdanhgia_service={
    getlistnguoidungdanhgia:async(req,res)=>{
   
                const getdanhgia=await nguoidanhgia.aggregate([{ $match : { idHeThong : req.body.idHeThong }},{$lookup:
                    {
                       from: "danhgias",
                       localField: "id",
                       pipeline: [
                        { $lookup:
                                {
                                   from: "chucnangs",
                                   localField: "idChucNang",
                                   foreignField: "id",
                                   as: "chucNang"
                                }
                            }
                    ],
                       foreignField: "idNguoiDanhGia",
                       as: "DanhGia"
                    }}]);
                 res.status(200).json(getdanhgia);
        
    },
}
module.exports={nguoidungdanhgia_service};
