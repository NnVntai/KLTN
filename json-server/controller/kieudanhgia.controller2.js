const { kieudanhgia_service}=require("../Service/kieudanhgia.service");
const kieudanhgia_controller={
    insertkieudanhgia:async(req,res)=>{
        try {
            
                 const saveAuthor=kieudanhgia_service.insertkieudanhgia(req);
                 res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getkieudanhgia:async(req,res)=>{
        try {
            const saveAuthor=kieudanhgia_service.getkieudanhgia(req);
            res.status(200).json(saveAuthor);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getinforkieudanhgia:async(req,res)=>{
        try {
            const saveAuthor=kieudanhgia_service.getinforkieudanhgia(req);
            res.status(200).json(saveAuthor);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deletekieudanhgia:async(req,res)=>{
        try {
            const saveAuthor=kieudanhgia_service.deletekieudanhgia(req);
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updatekieudanhgia:async(req,res)=>{
        try {
            const saveAuthor=kieudanhgia_service.updatekieudanhgia(req);
            res.status(200).json(1);
          } catch (error) {
              res.status(500).json(error);
          }
    },
}
module.exports={kieudanhgia_controller};