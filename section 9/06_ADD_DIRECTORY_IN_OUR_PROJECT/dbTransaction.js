// import { MongoClient } from "mongodb";



// export const client=new MongoClient("mongodb://localhost:27017/");


// await client.connect();

// console.log("DATABASE CONNECTED");



// const db=client.db();


// const directories=db.collection("directories");


// const users=db.collection("users");


// const session=client.startSession();
// session.startTransaction(); 







// try{
//     await directories.insertOne({name :"db",userName:"ta"},{session});


// // await users.insertOne({name:"tanish",rootDirName:"db"})



// // fails

// await users.insertOne({name:"ta",rootDirName:"db"},{session});



// await session.commitTransaction();
// }catch(err){
//     console.log(err);
//     await session.abortTransaction();
// }

// // await directories.insertOne({name :"db",userName:"ta"},{session});


// // // await users.insertOne({name:"tanish",rootDirName:"db"})



// // // fails

// // await users.insertOne({name:"ta",rootDirName:"db"},{session});



// // await session.commitTransaction();



// await client.close();


// console.log("DATABASE DISCONNECTED");



// //A Replica Set is a group of MongoDB servers (nodes) that maintain multiple copies of the same data and automatically handle failover to ensure high availability and fault tolerance.



// // A Replica Set is a group of MongoDB servers (nodes) that maintain multiple copies of the same data and automatically handle failover to ensure high availability and fault tolerance.


// // Replica Set = ek main server + multiple backup servers


// // Replica matlab original data ki duplicate copy


// //Replica Set = same database ki multiple copies (servers) ka group

// // 💡 Simple line:

// // Ek main server + multiple backup servers = Replica Set


// // replica set me ek server primary hota hai, jisme read/write operations hote hain, aur baaki servers secondary hote hain, jo primary server se data replicate karte hain. Agar primary server down ho jata hai, to secondary server automatically primary ban jata hai, isse high availability ensure hoti hai.


// // replica mai multiple servers hote hain, jisme se ek primary hota hai aur baaki secondary hote hain. Primary server me read/write operations hote hain, aur secondary servers primary server se data replicate karte hain. Agar primary server down ho jata hai, to secondary server automatically primary ban jata hai, isse high availability ensure hoti hai.



// // 🔹 Kyun use karte hain?

// // 👉 3 main reasons:

// // Data loss avoid karne ke liye
// // High availability (server down ho to bhi system chale)
// // Transactions enable karne ke liye (MongoDB me important 🔥)



















// // 1. Primary Node

// // 👉 Ye “leader” hota hai

// // ✔ Kaam:

// // Saare write operations (insert/update/delete)
// // Reads bhi handle kar sakta hai

// // 💡 Example:

// // db.users.insertOne({name: "tanish"})

// // 👉 Ye sirf primary pe hota hai

// // 🔵 2. Secondary Nodes

// // 👉 Ye “followers” hote hain

// // ✔ Kaam:

// // Primary ka data copy karna
// // Read operations serve karna (optional)
// // 🟡 3. Arbiter (optional)

// // 👉 Sirf voting karta hai
// // ❌ Data store nahi karta

// // 🔥 4. Internal Working (Most Important 🔥)
// // 🧠 Oplog Concept

// // 👉 Primary ek special log maintain karta hai:

// // 👉 Oplog (Operations Log)

// // ✔ Isme kya hota hai?

// // Saare changes record hote hain
// // 🔁 Flow:
// // User data insert karta hai
// // Primary usko database + oplog me likhta hai
// // Secondary nodes oplog read karte hain
// // Same operations repeat karte hain

// // 👉 Result: Sab nodes sync ho jaate hain

// // 🔥 5. Failover (Interview Favourite 🔥)
// // Situation:
// // Primary crash ho gaya ❌
// // Kya hoga?
// // Secondary nodes detect karte hain
// // Voting hoti hai
// // Ek secondary → new primary ban jata hai

// // 👉 Is process ko bolte hain: Failover

// // 🧠 Real-Life Analogy

// // 👉 Company ka CEO (Primary) chala gaya

// // Managers (Secondary) meeting karte hain
// // Naya CEO select hota hai

// // ✔ Company band nahi hoti

// // 🔥 6. Real World Use Cases
// // 🏦 Banking System
// // Transactions safe hone chahiye
// // Server crash → data loss nahi hona chahiye
// // 📸 Instagram / Google Drive
// // Photos multiple servers par stored
// // Ek server down → bhi photo available
// // 🛒 E-commerce (Amazon)
// // Orders lose nahi hone chahiye
// // High traffic handle karna hai
// // 🔥 7. Replica Set kyun important hai?
// // Feature	Benefit
// // Replication	Data safe
// // Failover	No downtime
// // Load balancing	Fast reads
// // Transactions	Supported
// // 🔥 8. Interview Answer (Perfect बोलने लायक)

// // 👉 Agar interviewer bole “Replica Set explain karo”:

// // Answer:

// // A replica set in MongoDB is a group of database servers that maintain multiple copies of the same data. It consists of a primary node that handles all write operations and secondary nodes that replicate data from the primary using the oplog. In case the primary node fails, an automatic election process selects a new primary, ensuring high availability and fault tolerance. Replica sets are also required for supporting transactions in MongoDB.

// // 🎯 Final One-Line Memory Trick

// // 👉
// // Replica = copy of data
// // Replica Set = system jo data ko multiple nodes me copy karke safe + always available banata hai


// // Fault Tolerance is the ability of a system to continue working properly even if one or more components fail.



// mongodb://anurag:anurag12@ec2-13-235-50-113.ap-south-1.compute.amazonaws.com:27017/storageApp

import { MongoClient } from "mongodb";

const connectionURL = "mongodb://anurag:anurag12@13.235.50.113:27017/storageApp";

const client = new MongoClient(connectionURL);

await client.connect();

const db = client.db();

const users = db.collection("users");

// data fetch karo
const result = await users.find().toArray();
console.log(result);

await client.close();