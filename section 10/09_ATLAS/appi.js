import { MongoClient } from "mongodb";


const connectionUrl="mongodb+srv://Tanish:tandon20@cluster1.1amagu3.mongodb.net/storageApp?appName=Cluster1"


const client=new MongoClient(connectionUrl)

await client.connect()

const db=client.db()

const collection=db.collection("users")

const data=await collection.find().toArray()


// await collection.insertOne({"name":"TANISH"})

console.log(data)

client.close()

