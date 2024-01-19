

const dotenv=require("dotenv");
const mongoose=require("mongoose");
dotenv.config();

// var mysqlconnet;
var mongodbconnet;

if(process.env.MONGODB_URL!="")
{
    mongodbconnet=mongoose.connect(process.env.MONGODB_URL,()=>{
        console.log("conneting mongodb");
       });
}
module.exports= {mongodbconnet};