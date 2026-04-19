
import {Schema,model} from "mongoose";
import { ref } from "process";












const directorySchema=new Schema({



    name:{


        type:String,
        required:true,




    },





    userId:{
        type:Schema.Types.ObjectId,
        required:true,


    },





    parentDirId:{
        type:Schema.Types.ObjectId,
        default:null,

        ref:'Directory'

    },

    





},

{
    strict:true,
    versionKey:false,
}

);









const Directory=model("Directory",directorySchema);

export default Directory;