

import { ObjectId } from "mongodb";



import User from "../models/userModel.js";
import mongoose, { Types } from "mongoose";
import Directory from "../models/directoryModel.js"















export const register=async(req,res,next)=>{
    const {name,email,password}=req.body

   


    // const foundUser=await User.findOne({email}).lean();

    // //findOne -> exists

    // if(foundUser){
    //    return res.status(409).json({
    //         error : "User already exists",
    //         message:"A user with this email address already exist.please try to login with different email"
    //      })
    // }

    






    // access control means koi user nhi hai 


    











const session=await mongoose.startSession();







    try{

      
        const rootDirId=new Types.ObjectId();
   
        const userId=new Types.ObjectId();














          




// start transaction



// const session=client.startSession();








session.startTransaction();


await Directory.insertOne({
   

    _id:rootDirId,
    name:`root-${email}`,





    parentDirId:null,
    userId,



 
    
},
{session}
);






   await User.insertOne({
        _id:userId,
        name,
        email,
        password,
        rootDirId,
    },
    {session}


    )


    //Session = ek logical connection / context jisme multiple operations group hote hain









    session.commitTransaction(); 









    // commit transaction


   




          
            res.status(201).json({message:"User registered"});


    }
    catch(err){
        
        console.log(err);
        console.log(req.body);
  
        if(err.code===121){
            res.status(400).json({error:"Invalid fields,please enter valid details"});
        }
        else if(err.code === 11000){
            if(err.keyValue.email){
                return res.status(409).json({
                error:"EMAIL ALREADY EXISTS",
                message:"A user with this email address already exist.please try to login with different email"

            })
            

  
            // console.log(err);
        }
    }
        
        else{

            next(err);

        }
    }

}


























export const login=async(req,res,next)=>{
    
 
    const {email,password}=req.body;



  


    const user=await User.findOne({email});

   

    
    console.log(user);

   
  

    if(!user || user.password!==password){
        return res.status(401).json({error : "INVALID CREDENTIALS"});
    }




  res.cookie("uid", user._id.toString() , {
  httpOnly: true,
  sameSite: "lax",
    secure: false,
  maxAge: 1000 * 60 * 60 * 24 * 7

});



   

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





















