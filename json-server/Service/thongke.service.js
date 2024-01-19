const {danhgia,kieudanhgia,nguoidanhgia}=require("../model/danhgia.model");
const {chucnang}=require("../model/chucnang.model");
const thongke_service={
    getsolieudanhgiachucnang:async(req)=>
    {
   
            const saveAuthor=await chucnang.aggregate([{ $match : { idHeThong : req.body.idHeThong }},{ $lookup:
                {
                   from: "danhgias",
                   localField: "id",
                   foreignField: "idChucNang",
                   as: "DanhGia"
                }
            }]) 
            return saveAuthor;
     
    },
    getthongketheonamline:async(req)=>
    {
         
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
              
                return row;
           
    },getthongkequantritheochucnang:async(req)=>{
     
            const row=await chucnang.aggregate([{ $match : { idHeThong : req.body.idHeThong }},{ $lookup:
                {
                   from: "danhgias",
                   localField: "id",
                   foreignField: "idChucNang",
                   as: "DanhGia",
                }
            }]);
           return row;
       
    }
}
module.exports={thongke_service};