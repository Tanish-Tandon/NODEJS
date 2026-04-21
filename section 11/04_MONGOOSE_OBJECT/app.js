import mongoose from "mongoose";

await mongoose.connect("mongodb://admin:admin@localhost");
 

// mongoose connect multiple databases sai connect kar skte alag alag connections ke liye alag alag model banega




// this is event emitter
// mongoose.connection.on('')




// await nhi use karege tabh connected open fire hoghe
// mongoose.connect("mongodb://admin:admin@localhost");


mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on('open', () => console.log('open'));
mongoose.connection.on('disconnected', () => console.log('disconnected'));
mongoose.connection.on('reconnected', () => console.log('reconnected'));
mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
mongoose.connection.on('close', () => console.log('close'));



// perform just like mongodb driver return full object

// const db=mongoose.connection.db;
// const fruitsCollection=db.collection('fruits');

// const result=await fruitsCollection.insertOne({name:"MANGO"});

// console.log(result);
await mongoose.disconnect();