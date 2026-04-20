import mongoose from "mongoose";


export async function  connectDB() {
  
    try{




            await mongoose.connect("mongodb://anurag:anurag12@localhost:27017/storageApp");


            
//           await mongoose.connect(

        


// await mongoose.connect("mongodb://anurag:anurag12@localhost:27017/storageApp")






   
    console.log("DATABASE CONNECTED");
    }catch(err){
        console.log(err);
        console.log("COULD NOT CONNECT TO THE DATABASE")
        process.exit(1);
    }

    
}






// yeh ek event hota hai jabh cltrl+c sai apna application cut karte hai
process.on('SIGINT',async()=>{
    await client.close();
    console.log("DATABASE DISCONNECTED")
    process.exit(0);
    
})


// await client.connect();




// const db=client.db();


// console.log(db.databaseName);

