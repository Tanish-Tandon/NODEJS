










import express from "express";

import todoRoutes from "./routes/todoRoutes.js";

import {connectDB} from "./db.js";
import { createEngine } from "express-react-views";

const app=express();

const db=await connectDB();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static("./public"));




app.set('views','./views');
app.set('view engine', 'jsx');
app.engine('jsx',createEngine);









app.use((req,res,next)=>{
  req.db=db;
  next();
});


app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.use("/todos",todoRoutes);




app.listen(7200,()=>{
  console.log(`Server is running`);
})
