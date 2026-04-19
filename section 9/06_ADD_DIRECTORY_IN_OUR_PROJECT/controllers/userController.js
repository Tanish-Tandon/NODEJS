

import { ObjectId } from "mongodb";


import {client} from "../config/db.js"















export const register=async(req,res,next)=>{
    const {name,email,password}=req.body

    // const db=req.db;
    const db=req.db;

    const foundUser=await db.collection('users').findOne({email});


    if(foundUser){
       return res.status(409).json({
            error : "User already exists",
            message:"A user with this email address already exist.please try to login with different email"
         })
    }

    






    // access control means koi user nhi hai 


    







    //  mongosh --port 27018



// const session=client.startSession();






//   const dirCollection=db.collection("directories");
    try{

      
        const rootDirId=new ObjectId()
        // const userId=new ObjectId()
        const userId=new ObjectId();




        //   const dirCollection=db.collection("directories");
        const dirCollection=db.collection("directories");






          




// start transaction



// const session=client.startSession();








// session.startTransaction();


await dirCollection.insertOne({
   
    // id:dirId,
    _id:rootDirId,
    name:`root-${email}`,
    // userId,




    parentDirId:null,
    userId,



 
    
});

// const rootDirId=userRootDir.insertId;
// const rootDirId = userRootDir.insertedId;
// console.log(rootDirId);





   await db.collection("users").insertOne({
        _id:userId,
        name,
        email,
        password,
        rootDirId,
    }


    )


    //Session = ek logical connection / context jisme multiple operations group hote hain









    // session.commitTransaction(); 









    // commit transaction


    // const userId=createdUser.insertedId;
    // await db.collection("directories").updateOne({_id:rootDirId},
    //     {$set:{userId}}
    // )





            // res.status(201).json({message:"User registered"})
            res.status(201).json({message:"User registered"});


    }
    catch(err){
        
        // session.abortTransaction();
        if(err.code===121){
            res.status(400).json({error:"Invalid fields,please enter valid details"});
        }else{

            next(err);

        }
    }

}


























export const login=async(req,res,next)=>{
    // console.log(req.body);
 
    const {email,password}=req.body;

    const db=req.db

  


    const user=await db.collection('users').findOne({email});

    // console.log(user);

    
    console.log(user);

    // if(!user || user.password !== password){
    //     return res.status(401).json({error : "INVALID CREDENTIALS"});
    // }
  

    if(!user || user.password!==password){
        return res.status(401).json({error : "INVALID CREDENTIALS"});
    }




  res.cookie("uid", user._id.toString() , {
  httpOnly: true,
  sameSite: "lax",
    secure: false,
  maxAge: 1000 * 60 * 60 * 24 * 7

});



    // res.json({message : 'LOGGED IN'})

    res.json({message: 'LOGGED IN'});
}































export const getCurrentUser=(req,res)=>{
    res.status(200).json({
        name:req.user.name,
        email:req.user.email,

    })

}
















export const logout=(req,res)=>{
    // res.status(200).json({
    //     name:req.user.name,
    //     email:req.user.email,
    // })

    //OR


//   res.cookie('uid','',{
//     maxAge:0
//   })


//.  OR


res.clearCookie('uid');

  res.status(204).end();

}





















