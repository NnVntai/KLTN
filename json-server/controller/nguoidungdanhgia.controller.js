
const { nguoidanhgia }=require("../model/danhgia.model");
const nguoidungdanhgia_controller={
    getlistnguoidungdanhgia:async(req,res)=>{
        try {
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
        } catch (error) {
            res.status(500).json(error);
        }
    },
}
module.exports={nguoidungdanhgia_controller};
