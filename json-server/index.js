const express=require('express');
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
const BodyParser=require("body-parser");
const morgan=require("morgan");
const dotenv=require("dotenv");
const helmet=require('helmet');
const thongke=require("./router/thongke.router");

const vaitro=require("./router/vaitro.router");

const login=require("./router/login.router");

const danhgia=require("./router/danhgia.router");

const hethong=require("./router/hethong.router");

const chucnang=require("./router/chucnang.router");

const account=require("./router/account.router");

const noidungdanhgia=require("./router/noidungdanhgia.router");

const nguoidungdanhgia=require("./router/nguoidungdanhgia.router");

const kieudanhgia=require("./router/kieudanhgia.router");
const rateLimit = require('express-rate-limit');
const middleware=require("./JWT/middleware");
app.use(express.json({limit:"300kb"}));
app.use(BodyParser.json({limit:"50mb"}));
app.use(cors()); 
app.use(morgan("common"));
dotenv.config();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Request-With,Content-Type,Accept');
    next();
});

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 5 phút
    max: 100,
    message:"429"
  })
  app.use(limiter);
  app.set('trust proxy', 10);

  app.get('/ip', (request, response) => response.send(request.ip));

app.use("/api",login);

app.use("/api",danhgia);

app.use(middleware.isAuth);

app.use("/api",thongke);
app.use("/api",account);
app.use("/api",chucnang);
app.use("/api",vaitro);
app.use("/api",hethong);
app.use("/api",kieudanhgia);
app.use("/api",noidungdanhgia);
app.use("/api",nguoidungdanhgia);
app.use(helmet());
app.listen(8000,()=>{
    console.log("server running localhost 8000");
})