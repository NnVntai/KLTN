
const {danhgia_service}=require("../Service/danhgia.service");

const danhgia_controller={
    getgiaodienDanhGiaiChucNang:async(req,res)=>{
        try {
          
                    const result=danhgia_service.getgiaodienDanhGiaiChucNang(req)
                     res.status(200).json(result);
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    deleteDanhGia:async(req,res)=>{
        try {
        
                const saveAuthor=danhgia_service.deleteDanhGia(req);
            res.status(200).json(1);
            

        } catch (error) {
            res.status(500).json(error);
        }
    },
    getInforDanhGia:async(req,res)=>{
        try {
                const getuser=danhgia_service.getInforDanhGia(req);
                res.status(200).json(getuser);
         
        } catch (error) {
            res.status(500).json(error);
        }
    },
    capNhatDanhGia:async(req,res)=>{
        try {
            const getuser=danhgia_service.capNhatDanhGia(req);
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getdanhgiachucnangnguoidung:async(req,res)=>
    {
        try {
            const getuser=danhgia_service.getdanhgiachucnangnguoidung(req);
            res.status(200).json(getuser);
     
        } catch (error) {
            res.status(500).json(error);
        }
    },getthongtinnguoidanhgia:async(req,res)=>
    {

        try {
            const getuser=danhgia_service.getthongtinnguoidanhgia(req);
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    },insertnguoidanhgia:async(req,res)=>{
        try {
            const getuser=danhgia_service.insertnguoidanhgia(req);
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    insertdanhgianguoidung:async(req,res)=>{
        try {
            const getuser=danhgia_service.insertdanhgianguoidung(req);
            
            res.status(200).json(1);
     
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getgiaodiendanhgiakhongconguoidung:async(req,res)=>{
        try {
            const getuser=danhgia_service.getgiaodiendanhgiakhongconguoidung(req);
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    capnhatdanhgianguoidung:async(req,res)=>
    {
        try {
            const getuser=danhgia_service.capnhatdanhgianguoidung(req);
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },getdanhgiadmin:async(req,res)=>{
        try {
            const getuser=danhgia_service.getdanhgiadmin(req);
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        } 
    }
}
module.exports={danhgia_controller};