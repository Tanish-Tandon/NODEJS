


















// import { MongoClient } from "mongodb";

import mongoose from "mongoose";





// export const client=new MongoClient("mongodb://admin:admin@localhost:27017/todoApps?authSource=admin");


export async function connectDB() {

  try{
      await mongoose.connect(
    "mongodb://admin:admin@localhost:27017/todoApps?authSource=admin"


  );

  

  console.log("Database connected");
  }
  catch(err){
    console.log(err.message);
    process.exit(1);// iska means kisi error ki vajah sai exit ho rha hai code hamara
  }



  
}





// await connectDB();




process.on("SIGINT",async()=>{
  // await client.close();

  await mongoose.disconnect();
  console.log("Client Disconnected!");

  process.exit(0);// iska matlab hai ki hum gracefully exit kara rhe hai
})

