const express = require('express')
const cors = require('cors')
// const routers=require('./routers/hethong.router');
const hethong=require('./routers/hethong.router');
const chucnang=require('./routers/chucnang.router');
const danhgia=require('./routers/danhgia.router');
const account=require('./routers/account.router');
const login=require('./routers/login.router');
const thongke=require('./routers/thongke.router');
const kieudanhgia=require('./routers/kieudanhgia.router');
const noidungdanhgia=require('./routers/noidungdanhgia.router');
const vaitro=require('./routers/vaitro.router');
const rateLimit = require('express-rate-limit');
const helmet=require('helmet');
require('dotenv').config()
// const errorHandler = require('./middleware/error')
const BodyParser=require("body-parser");
const morgan=require("morgan");
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json({limit:"300kb"}));
// app.use(express.json({limit:'10mb'}));
app.use(cors()); 
app.use(morgan("common"));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Request-With,Content-Type,Accept');
    next();
});


// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 Mins
  max: 100,
})
app.use(limiter);
app.set('trust proxy', 1);

app.use("/api",hethong);
app.use("/api",chucnang);
app.use("/api",danhgia);
app.use("/api",account);
app.use("/api",login);
app.use("/api",thongke);
app.use("/api",vaitro);
app.use ("/api",noidungdanhgia);
app.use("/api",kieudanhgia);


app.use(helmet());


// Enable cors
// app.use(cors())

// // Set static folder
// app.use(express.static('public'))

// // Routes
// app.use('/api', require('./routes'))

// // Error handler middleware
// app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))