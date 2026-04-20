import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import directoryRoutes from "./routes/directoryRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import CheckAuth from "./middlewares/authMiddleware.js";
import { connectDB } from "./config/db.js";
// import './config/mongoose.js'; 





  






const app = express();




app.use(cookieParser());



app.use(express.json());
app.use(cors({
 
  origin: "http://localhost:5173",
   

  credentials:true,
}));








app.use("/directory", CheckAuth,directoryRoutes);
app.use("/file",CheckAuth, fileRoutes);
app.use("/user",userRoutes);















app.use((err,req,res,next)=>{
  

  res.status(err.status || 500).json({error : "SOMETHING WENT WRONG!"});
})





 await connectDB();

app.listen(2200, "0.0.0.0",() => {
  console.log(`Server Started`);
});













