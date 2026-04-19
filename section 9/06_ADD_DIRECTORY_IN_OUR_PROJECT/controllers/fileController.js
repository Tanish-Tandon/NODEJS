import { createWriteStream } from "fs";

import { rm } from "fs/promises";

import path from "path";


import { ObjectId } from "mongodb";








export const uploadFile=async (req, res, next) => {

  // const db = req.db;
  const db=req.db;

  // const filesCollection=await db.collection("files");

  const dirCollection = db.collection("directories");
   const filesCollection= db.collection("files");
  const parentDirId = req.params.parentDirId || req.user.rootDirId;

  const filename = decodeURIComponent(req.headers.filename || "untitled");

  const extension = path.extname(filename);



 

  const parentDirData = await dirCollection.findOne({
    _id: new ObjectId(parentDirId)
  });

  if (!parentDirData) {
    return res.status(400).json({ error: "Parent directory not found" });
  }

  
  
  const insertedFile = await filesCollection.insertOne({
    extension,

    name: filename,
    parentDirId: parentDirData._id,
    userId: req.user._id
  });

  const fileId = insertedFile.insertedId.toString();

  const fullFileName = `${fileId}${extension}`;

  const writeStream = createWriteStream(`./storage/${fullFileName}`);

  req.on("data", (chunk) => {
    writeStream.write(chunk);
  });

  req.on("end", () => {
    writeStream.end();
  });

  writeStream.on("finish", async () => {

   

    if (!parentDirData) {
      return res.status(400).json({ error: "Parent directory not found" });
    }

    return res.status(201).json({ message: "File Uploaded" });
  });





  req.on('error',async()=>{
    console.log("error");
    await filesCollection.deleteOne({_id:insertedFile.insertedId})
    return res.status(404).json({message : "COULD not upload file"})

  })

}


















export const getFile=async(req, res) => {

  const { id } = req.params;
  // const db=req.user
  const db=req.db;


  // const fileData = filesData.find((file) => file.id === id);


//   console.log(db);
// console.log(db.collection);


  const filesCollection= db.collection("files");
  // console.log(filesCollection);
  const fileData= await filesCollection.findOne({_id:new ObjectId(id),userId:req.user._id})






  if (!fileData) {
    return res.status(404).json({ message: "FILE NOT FOUND!" });
  }

  if (!fileData.userId.equals(req.user._id))  {
    return res.status(401).json({
      error: "YOU DO NOT HAVE ACCESS TO THIS FILE"
    });
  }

  const filePath = `${process.cwd()}/storage/${id}${fileData.extension}`;

  if (req.query.action === "download") {
    return res.download(filePath, fileData.name);
  }

  return res.sendFile(filePath, (err) => {
    if (!res.headersSent && err) {
      return res.status(404).json({ error: "File not found!" });
    }
  });

}























export const renameFile= async (req, res, next) => {

  const { id } = req.params;

  const db=req.db;
  const filesCollection=db.collection("files");

  // const fileData = filesData.find((file) => file.id === id);

  const fileData=await filesCollection.findOne({
    _id:new ObjectId(id),
    userId:req.user._id,
  });

  if (!fileData) {
    return res.status(404).json({ message: "FILE NOT FOUND!" });
  }

  // fileData.name = req.body.newFilename;

  try {
    // await writeFile("./filesDB.json", JSON.stringify(filesData, null, 2));


    await filesCollection.updateOne({
      _id:new ObjectId(id) },
      {$set:{name : req.body.newFilename}}
    );

    return res.status(200).json({ message: "Renamed" });
  } catch (err) {
    err.status = 500;
    next(err);
  }
}

















export const deleteFile= async (req, res, next) => {

  const { id } = req.params;

  const db=req.db;
  const filesCollection=db.collection("files");
  const filesData=await filesCollection.findOne({
    _id:new ObjectId(id),
    userId:req.user._id,
  })


  if(!filesData){
    return res.status(404).json({error:"file not found"});
  }
  // const fileIndex = filesData.findIndex((file) => file.id === id);

  // if (fileIndex === -1) {
  //   return res.status(404).json({ message: "FILE NOT FOUND!" });
  // }

  // const fileData = filesData[fileIndex];

  try {

    await rm(`./storage/${id}${filesData.extension}`);

    await filesCollection.deleteOne({_id:filesData._id});

    // filesData.splice(fileIndex, 1);

    // const parentDirData = directoriesData.find(
    //   (directoryData) => directoryData.id === fileData.parentDirId
    // );

    // parentDirData.files = parentDirData.files.filter(
    //   (fileId) => fileId !== id
    // );

    // await writeFile("./filesDB.json", JSON.stringify(filesData, null, 2));
    // await writeFile("./directoriesDB.json", JSON.stringify(directoriesData, null, 2)); 

    return res.status(200).json({ message: "File Deleted Successfully" });

  } catch (err) {
    next(err);
  }

}







