






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


    password:String,
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




//find idhar toh findOne bhi udhar 




// userSchema.pre(["find","findOne"],function(){
//     this.find({age:{$gte:90}}).select('name age -_id')
// })

// userSchema.pre("findOne",function(){
//     this.find({age:{$gte:90}}).select('name age -_id')
// })



///^find/". jitne bhi find wale hai un sbke ke liye like jin mai bhi find aajae unke liyee chal ajega



userSchema.pre(/^find/,function(){
    this.find({age:{$gte:90}}).select('name age -_id')
})





userSchema.post(/^find/,function(doc){
    console.log(doc);
    console.log("HELLO");
})


// userSchema.pre('save',function(){
    // console.log("RUN MY DOCUMENT MIDDLEWARE");

    // this.password=this.name + this.age;
    // console.log(this);
    // next();// likho na likho isme chal jaega 
// })







// userSchema.post('save',function(doc){
//     console.log(`Your account is create and your password is ${doc.password}`);






    // console.log("MY DOC");   

    // console.log(doc);
    // console.log(this);
     

  
// })


const User=model("User",userSchema);


export default User;


