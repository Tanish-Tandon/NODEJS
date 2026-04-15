






import mongoose from "mongoose";

const UserModel=mongoose.model("User",{name:String,age:Number});





const data= await UserModel.findOne({name:"ANK"});


console.log(data);


console.log("USERMODEL.JS FILE EXECUTED");
