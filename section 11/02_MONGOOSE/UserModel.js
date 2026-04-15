






import mongoose ,{Schema, SchemaTypes} from "mongoose";

console.log("START USERMODEL.JS FILE");

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










const UserModel=mongoose.model("User",userSchema);



const data= await UserModel.insertOne({name:"THE RIT TANDON",age:21,email:"tandon123@gmail.com",hobby:["coding"],parentId:"69dfa0ce536ed0638fbc9ab6"});


console.log(data);


console.log("USERMODEL.JS FILE EXECUTED");
