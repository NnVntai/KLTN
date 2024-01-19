const {hethong_service}=require("../Service/hethong.service");
const hethong_controller={
    getHethong:async(req,res)=>{
         try {
            const gethethong=hethong_service.getHethong(req);
            res.status(200).json(gethethong);
          } catch (error) {
             res.status(500).json(error);
          }
    },
    insertsystem:async(req,res)=>{
        try {
            const gethethong=hethong_service.insertsystem(req);
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
   deletesys:async(req,res)=>{
        try {
            const gethethong=hethong_service.deletesys(req);
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    changesys:async(req,res)=>{
        try {
            const gethethong=hethong_service.changesys(req);
            res.status(200).json(1);
          } catch (error) {
              res.status(500).json(error);
          }
    },
    checksys:async(req,res)=>{
        try {
            const gethethong=hethong_service.checksys(req);
            res.status(200).json(gethethong);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getinforsys:async(req,res)=>{
        try {
              const gethethong=hethong_service.getinforsys(req);
            res.status(200).json(gethethong);
        } catch (error) {
            res.status(500).json(error);
        }
    },  getinforsysdanhgia:async(req,res)=>{
        try {
            const gethethong=hethong_service.getinforsysdanhgia(req);
            res.status(200).json(gethethong);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
module.exports={hethong_controller};