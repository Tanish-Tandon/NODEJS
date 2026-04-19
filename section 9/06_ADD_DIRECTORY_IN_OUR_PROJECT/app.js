import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import directoryRoutes from "./routes/directoryRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import CheckAuth from "./middlewares/authMiddleware.js";
import { connectDB } from "./config/db.js";
import './config/mongoose.js'; 




try{

  



const db=await connectDB()


// console.log(db.namespace)









const app = express();




app.use(cookieParser());

// app.use(express.json());

app.use(express.json());
app.use(cors({
  // origin :"http://localhost:5173",
  // origin: true,
  origin: "http://localhost:5173",
    // origin: "http://10.78.24.55:5173",

  credentials:true,
}));




app.use((req,res,next)=>{
  req.db=db;
  next();
})






app.use("/directory", CheckAuth,directoryRoutes);
app.use("/file",CheckAuth, fileRoutes);
app.use("/user",userRoutes);















app.use((err,req,res,next)=>{
  // console.log('ERROR Occurred');

  res.status(err.status || 500).json({error : "SOMETHING WENT WRONG!"});
})



app.listen(2200, "0.0.0.0",() => {
  console.log(`Server Started`);
});








} catch(err){
  console.log("Could not connect to database")
  console.log(err);
}




// const app = express();
// app.use(cookieParser());

// // app.use(express.json());

// app.use(express.json());
// app.use(cors({
//   // origin :"http://localhost:5173",
//   // origin: true,
//     origin: "http://10.78.24.55:5173",
//   credentials:true,
// }));

// ;

// app.use("/directory", CheckAuth,directoryRoutes);
// app.use("/file",CheckAuth, fileRoutes);
// app.use("/user",userRoutes);
















// app.use((err,req,res,next)=>{
//   // console.log('ERROR Occurred');

//   res.status(err.status || 500).json({message : "SOMETHING WENT WRONG!"});
// })



// app.listen(2200, () => {
//   console.log(`Server Started`);
// });
