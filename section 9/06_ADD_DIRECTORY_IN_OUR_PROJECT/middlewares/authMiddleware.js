


import { ObjectId } from "mongodb"
import User from "../models/userModel.js";








export default async function CheckAuth(req,res,next){
  // console.log(req.cookies);


  const { uid } = req.cookies







if(!uid ){
    return res.status(401).json({error :"NOT LOGGED IN"})
  }

  
  const {id,expiry:expiryTimeInSeconds}=JSON.parse(Buffer.from(uid, "base64url").toString("utf-8"));
  // console.log(id,expiry);

  // const expiryTimeInSeconds=parseInt(uid.substr(24,32), 16);
  // console.log(expiryTimeInSeconds);



  const currentTimeInSeconds=Math.round(Date.now()/1000);


//  console.log({expiryTimeInSeconds,currentTimeInSeconds}); 
  if(currentTimeInSeconds>expiryTimeInSeconds){
    res.clearCookie("uid");
    return res.status(401).json({error : "NOT LOGGED IN"});
  }
  
  
  // console.log({expiryTimeInSeconds,currentTimeInSeconds}); 


  // console.log(new Date(expiryTimeInSeconds*1000).toString());






  

  const user = await User.findOne({_id : id}).lean();

  if( !user){
    return res.status(401).json({error :"NOT LOGGED IN"})
  }

  req.user = user
  next()
}