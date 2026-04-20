import { createWriteStream } from "fs";

import { rm } from "fs/promises";

import path from "path";


import { ObjectId } from "mongodb";

import Directory from "../models/directoryModel.js";

import File from "../models/fileModel.js";









export const uploadFile=async (req, res, next) => {





  const parentDirId = req.params.parentDirId || req.user.rootDirId;
try{

  const filename = decodeURIComponent(req.headers.filename || "untitled");

  const extension = path.extname(filename);








 

  const parentDirData = await Directory.findOne({
    _id: parentDirId,
    userId:req.user._id,
  });

  if (!parentDirData) {
    return res.status(400).json({ error: "Parent directory not found" });x
  }



  
  
  const insertedFile = await File.create({
    extension,

    name: filename,
    parentDirId: parentDirData._id,
    

    userId:req.user._id
    
  });


  // const fileId = insertedFile.id;
  const fileId = insertedFile._id.toString();




  const fullFileName = `${fileId}${extension}`;

  
  const writeStream=createWriteStream(`./storage/${fullFileName}`);


   


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
    await File.deleteOne({_id:insertedFile.insertedId})
    return res.status(404).json({message : "COULD not upload file"})

  });
}
catch(err){
  console.log(err);
  next(err);
}



}





















export const getFile=async(req, res) => {

  const { id } = req.params;
  


  // const filesCollection= db.collection("files");
  // console.log(filesCollection);
  const fileData= await File.findOne({_id:id,userId:req.user._id}).lean();







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





  const file=await File.findOne({
    _id:id,
    userId:req.user._id,
  });

  if (!file) {
    return res.status(404).json({ message: "FILE NOT FOUND!" });
  }



  try {
   

   file.name=req.body.newFilename
   await file.save();

    return res.status(200).json({ message: "Renamed" });
  } catch (err) {
    err.status = 500;
    next(err);
  }
}



















export const deleteFile= async (req, res, next) => {

  const { id } = req.params;

  const file=await File.findOne({
    _id:id,
    userId:req.user._id,
  }).select('extension');


  if(!file){
    return res.status(404).json({error:"file not found"});
  }


  try {

    await rm(`./storage/${id}${file.extension}`);

    await file.deleteOne();

  


    return res.status(200).json({ message: "File Deleted Successfully" });

  } catch (err) {
    next(err);
  }

}







