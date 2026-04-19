
// import { ObjectId } from "mongodb";

// import Directory from "../models/directoryModel.js";

import {rm} from "fs/promises";




import Directory from "../models/directoryModel.js";

import { readFile } from "fs/promises";

import File from "../models/fileModel.js";



















export const getDirectoryById=async (req, res) => {


  
  const user = req.user;

  try {
    const directoriesData = JSON.parse(
      await readFile("./directoriesDB.json", "utf-8")
    );

    const filesData = JSON.parse(
      await readFile("./filesDB.json", "utf-8")
    );

    const _id = req.params.id || user.rootDirId.toString();







const directoryData = await Directory.findOne({
  _id
}).lean();


    if (!directoryData) {
      return res.status(404).json({ message: "Directory not found" });
    }



    const files = await File
  .find({ parentDirId: directoryData._id }).lean();




const directories = await Directory
  .find({ parentDirId: _id}).lean();




    return res.status(200).json({
      ...directoryData,
      files:files.map((dir)=>({...dir,id:dir._id})),
      directories:directories.map((dir)=>({...dir,id:dir._id})),
    });

  } catch (err) {
    console.log("GET ERROR:", err);
    res.status(500).json({ message: "Server Error" });
  }
};





































export const createDirectory = async (req, res, next) => {
  const user = req.user;


   console.log("🔥 FULL HEADERS:", req.headers);
  console.log("🔥 FULL BODY:", req.body);

  // 🟢 INPUT DEBUG
  console.log("👉 USER:", user);
  console.log("👉 PARAMS:", req.params);
  console.log("👉 HEADERS dirname:", req.headers.dirname);

  try {
    const directoriesData = JSON.parse(
      await readFile("./directoriesDB.json", "utf-8")
    );

    const parentDirId =
      req.params.parentDirId || user.rootDirId.toString();

    console.log("👉 parentDirId:", parentDirId); // 🟢 DEBUG

    const dirname = req.headers.dirname || "NEW FOLDER";
    console.log("👉 dirname:", dirname); // 🟢 DEBUG

    const id = crypto.randomUUID();

    // 🟡 BEFORE DB CALL
    console.log("⏳ Finding parent directory...");

    const parentDir = await Directory.findOne({
      _id: parentDirId,
    }).lean();

    // 🟡 AFTER DB CALL
    console.log("👉 parentDir:", parentDir);

    if (!parentDir) {
      console.log("❌ Parent directory not found");
      return res.status(404).json({ message: "Parent directory not found" });
    }

    console.log("⏳ Creating directory...");

    const savedDir = await Directory.create({
      name: dirname,
      parentDirId: parentDir._id,
      userId: user._id,
    });

    console.log("✅ SAVED DIR:", savedDir);

    return res.status(201).json({ message: "Directory Created!" });

  } catch (err) {

    // 🔴 🔴 MOST IMPORTANT (ERROR DEBUG)
    console.log("🔥 FULL ERROR:", err);
    console.log("🔥 MESSAGE:", err.message);
    console.log("🔥 STACK:", err.stack);
    console.log("🔥 CODE:", err.code);
    console.log("🔥 ERRORS:", err.errors);

    console.log(
  "🔥 VALIDATION DETAILS:",
  JSON.stringify(err.errInfo?.details, null, 2)
);

    if (err.code === 121) {
      return res
        .status(400)
        .json({ error: "Invalid fields, please enter valid details" });
    } else {
      return res.status(500).json({ error: err.message });
    }
  }
};













































export const renameDirectory=async (req, res, next) => {
  const { id } = req.params;
  const { newDirName } = req.body;


  try {
 



    const user = req.user;
 await Directory.findOneAndUpdate(
  {
  _id:id,
  userId:user._id,
  },
 
 {name:newDirName })
  

   

    return res.status(200).json({ message: "Directory Renamed!" });

  } catch (err) {
    next(err);
  }
}

































































 










export const deleteDirectory=async (req, res, next) => {
  const user=req.user;
   
  

  try{
      const { id } = req.params;


  const db=req.db;



  const filesCollection=db.collection('files');

  const dirCollection=db.collection('directories');

 

  





 const directoryData= await Directory.findOne({_id:id,userId:req.user._id},
  
 ).select("_id").lean();


 if(!directoryData){
  return res.status(404).json({error : "DIRECTORY NOT FOUND"});
 }







 











  async function getDirectoryContents(id){


  let files=await File.find({parentDirId:id }).select("_id extension").lean();



  let directories=await Directory.find({parentDirId:id}).select('_id name').lean();






  for(const {_id,name} of directories){

    console.log(name);
    

   const{files :childFiles,directories:childDirectories}= await getDirectoryContents(
      _id
      
    );



    files=[...files,...childFiles];

    

directories=[...directories,...childDirectories];

  }













  return {files,directories};




  }


  

  




  const {files,directories}=await getDirectoryContents(id);







  console.log(files,directories);

  for(const {_id,extension} of files){

    await rm(`./storage/${_id.toString()}${extension}`);
 
  }








  




 await  File.deleteMany({_id : {$in :files.map(({_id})=>_id)}})



 await Directory.deleteMany({_id : {$in :[...directories.map(({_id})=>_id),id]}})



  }

catch(err){
  next(err);
}




 

  return res.json({message : "FILES DELETED SUCCESSFULLY"})
  


}






