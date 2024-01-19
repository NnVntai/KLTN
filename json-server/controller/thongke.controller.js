const {danhgia,kieudanhgia,nguoidanhgia}=require("../model/danhgia.model");
const {chucnang}=require("../model/chucnang.model");
const thongke_controller={
    getsolieudanhgiachucnang:async(req,res)=>
    {
        try {
            const saveAuthor=await chucnang.aggregate([{ $match : { idHeThong : req.body.idHeThong }},{ $lookup:
                {
                   from: "danhgias",
                   localField: "id",
                   foreignField: "idChucNang",
                   as: "DanhGia"
                }
            }]) 
            res.status(200).json(saveAuthor);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getthongketheonamline:async(req,res)=>
    {
            try {
                const row=await chucnang.aggregate([{ $match : { idHeThong : req.body.idHeThong }},{ $lookup:
                    {
                       from: "danhgias",
                       pipeline: [
                                      {
                                        $match: {
                                            
                                             $and: [
                                            {
                                              "ngayDanhGia": {
                                                $gte: new Date(req.body.ngaydaunam)  
                                              }
                                            },
                                            {
                                              "ngayDanhGia": {
                                                $lte: new Date(req.body.ngaycuoinam)   
                                              }
                                            }
                                          ], 
                                        }
                                      },{
                                            $group: {
                                              _id: {
                                                $dateToString: {
                                                  "date": "$ngayDanhGia",
                                                  "format": "%m"
                                                }
                                              },
                                              Count: {
                                                $sum: 1
                                              },
                                              
                                            }
                                          },{ '$sort' : { _id:1} }
                                 ],
                       localField: "id",
                       foreignField: "idChucNang",
                       as: "thongke"
                    }
                }]) ;
                console.log(req.body.ngaydaunam);
                res.status(200).json(row);
            } catch (error) {
                res.status(500).json(error);
            }
    },getthongkequantritheochucnang:async(req,res)=>{
      try {
            const row=await chucnang.aggregate([{ $match : { idHeThong : req.body.idHeThong }},{ $lookup:
                {
                   from: "danhgias",
                   localField: "id",
                   foreignField: "idChucNang",
                   as: "DanhGia",
                }
            }]);
            res.status(200).json(row);
      } catch (error) {
          res.status(500).json(error);
      }
       
    }
}
module.exports={thongke_controller};