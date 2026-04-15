import mongoose from "mongoose";


await mongoose.connect("mongodb://admin:admin@localhost")



mongoose.set("autoCreate",false);





// yeh name string sai node js takh rhega mongodb mai nhi jaega
const UserModel=mongoose.model("User",{name:String,age:Number});
const data=await UserModel.insertOne({name:"TANISH KING",age:25});


console.log("DATABASE CONNECTED");
console.log(data);