
const { nguoidungdanhgia_service }=require("../Service/nguoidanhgia.service");
const nguoidungdanhgia_controller={
    getlistnguoidungdanhgia:async(req,res)=>{
        try {
                const getdanhgia=nguoidungdanhgia_service.getlistnguoidungdanhgia(req);
                 res.status(200).json(getdanhgia);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}
module.exports={nguoidungdanhgia_controller};
