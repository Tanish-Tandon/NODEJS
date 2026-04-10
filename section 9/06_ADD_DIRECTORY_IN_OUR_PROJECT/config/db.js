import { MongoClient } from "mongodb";


export const client = new MongoClient(
  "mongodb://anurag:tanishh@localhost:27018/storageApp?authSource=admin"
);

// export const client=new MongoClient("mongodb://localhost:27017/storageApp")



export async function connectDB() {
    await client.connect();
    const db=client.db();
    console.log('database connected');
   return db;
    
}

// yeh ek event hota hai jabh cltrl+c sai apna application cut karte hai
process.on('SIGINT',async()=>{
    await client.close();
    console.log("CLIENT DISCONNECTED")
    process.exit(0);
    
})


// await client.connect();




// const db=client.db();


// console.log(db.databaseName);

