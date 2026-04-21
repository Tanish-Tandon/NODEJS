






import {model, Schema, SchemaTypes} from "mongoose";
import { use } from "react";



// const userSchema={name:String,age:Number}




const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required Please provide name"],
        minLength:[5,"Name must be at least 5 characters long"],
        trim:true,
        alias:"nam",
        

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
        default:null,
        ref:'User',
    }
},






{
    strict:"throw",



    timestamps:true,





    virtuals:{
        isAdult:{
            get (){


                return this.age >= 18;




            }
        },





        hobbiesString:{
            get(){
                return this.hobby.join(", ");
            },


            set(value){
                // const newHobbies=value.split(', ');
                this.hobby=[...this.hobby,...value.split(", ")];
            }
        },









    },




    methods:{
    getSummary(option){

        if(option === 'full'){


            return `${this.name} is ${this.age} years old and he has these hobbies:${this.hobby.join(',  ')}.`;

        }

        return `${this.name} is ${this.age} years old.`;

    }
    },



    statics:{

         findByName(name){
        return this.find({name});
        },

        findOneByName(name){
        return this.findOne({name});
        },

          findByEmail(email){
        return this.findOne({email});

        }

    }



    















});










// userSchema.virtual('emailDomain').get(function(){
//    return this.email.split('@')[1]
// })

//syntax
// userSchema.statics.xyz=function(){

// }



// userSchema.methods.abc=function(){

// }

userSchema.pre('find',function(){
    console.log("RUN MY QUERY MIDDLEWARE");
    console.log(this);
})


const User=model("User",userSchema);


export default User;


