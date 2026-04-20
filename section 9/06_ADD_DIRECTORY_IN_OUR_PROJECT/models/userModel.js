
import {Schema,model} from "mongoose";
import { type } from "os";
import { ref } from "process";












const userSchema=new Schema({



    name:{


        type:String,
        required:true,
        minLength:[3,
             'name field should be a string with minimum length of 3 characters'
        ]




    },





    email:{
        type:String,
        required:true,
         match: [
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
    'email field should be a valid email address'
  ]
      


    },


    password:{
        type:String,
        required:true,
        minLength:4,


    },





    rootDirId:{
        type:Schema.Types.ObjectId,
        ref:'Directory',

    },

    





},

{
    strict:true,
    versionKey:false,
}

);









const User=model("User",userSchema);

export default User;