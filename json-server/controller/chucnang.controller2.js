
const {chucnang_service}=require("../Service/chucnang.service");
const chucnang_controller={
    getfunction:async(req,res)=>{
        try {
            const result=chucnang_service.getfunction(req);
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    deletefunction:async(req,res)=>{
        try {
            const saveAuthor=chucnang_service.deletefunction(req);
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getinforfunction:async(req,res)=>{
        try {
            const getuser=chucnang_service.getinforfunction(req);
            res.status(200).json(getuser);
       
        } catch (error) {
            res.status(500).json(error);
        } 
    },
    insertfunction:async(req,res)=>{
        try {
            
            const saveAuthor=chucnang_service.insertfunction(req);
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateChucNang:async(req,res)=>{
        try {
             const returne=chucnang_service.updateChucNang(req);
             res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },checkChucNang:async(req,res)=>{
        try {
            const getuser=chucnang_service.checkChucNang(req)
        } catch (error) {
            res.status(500).json(error); 
        }
    }
}
module.exports={chucnang_controller};