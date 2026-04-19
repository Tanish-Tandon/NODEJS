
import { extension } from "mime-types";
import {Schema,model} from "mongoose";
import { ref } from "process";












const fileSchema=new Schema({



    name:{


        type:String,
        required:true,






    },




    extension:{
        type:String,
        required:true,
    },





    userId:{
        type:Schema.Types.ObjectId,
        required:true,


    },





    parentDirId:{
        type:Schema.Types.ObjectId,

        ref:'Directory'

    },






},

{
    strict:"throw",
}

);









const File=model("File",fileSchema);

export default File;