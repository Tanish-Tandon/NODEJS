

import crypto from 'crypto';

import {readFile} from "node:fs/promises";
import {createWriteStream} from "node:fs";







const signedFileContent=await readFile("loan-agreement-signed.md","utf-8");


const [fileContent,signature]=signedFileContent.split("हस्ताक्षर:- ");
const mySecretKey="my-super-secret-key";





//console.log(fileContent,signature);



const newSignature=crypto
.createHash('sha256')
.update(fileContent + 'हस्ताक्षर:- ')// this data is being hashed
.update(mySecretKey)
.digest("base64url");


console.log(newSignature);
console.log(signature);




if(newSignature===signature){
    console.log("PERFECT,this letter is valid. here is your money");
}
else{
    console.log("INVALID, this letter is not valid. here is your money back");
}











//const signature=original data+secret key--->hash value
//signed file=original data+signature

//verifying the signature
//hash value==>original data+secret key--->hash value

