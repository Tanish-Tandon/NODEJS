






import {model, Schema, SchemaTypes} from "mongoose";



// const userSchema={name:String,age:Number}




const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required Please provide name"],
        minLength:[5,"Name must be at least 5 characters long"],
        trim:true
        

    },
    age:{
        type:Number,
        required:[true,"Age is required Please provide age"],
        min:[18,"Age must be at least 18"],
        validate:{
            validator(){
                console.log("RUNNING CUSTOM VALIDATION");

               return this.age % 2 === 0;
          
            },

            message:"AGE CAN ONLY BE AN EVEN NUMBER."

        }
    },

     email:{
        type:String,
        required:[true,"Email is required Please provide email"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please provide a valid email address"],
        lowercase:true,
        trim:true,
    },

    hobby:[String],
    parentId:{
        type:Schema.Types.ObjectId,
        required:function(){
            return this.age < 22;
        },
        default:null
    }
},

{
    strict:"throw",



    timestamps:true,







});










const User=model("User",userSchema);


export default User;
