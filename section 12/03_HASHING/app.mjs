// const encodedText = new TextEncoder().encode("Hello World");
// const hashBuffer = await crypto.subtle.digest("SHA-256", encodedText);
// const hashArray = [...new Uint8Array(hashBuffer)];
// const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");

// console.log(hashHex);


// const encodeText=new TextEncoder().encode("TANISH TANDON");

// const hashBuffer=await crypto.subtle.digest("SHA-256",encodeText);

// const hashArray=[...new Uint8Array(hashBuffer)];

// const hashHex=hashArray.map(byte => byte.toString(16).padStart(2,"0")).join("");

// console.log(hashHex); 









// import crypto from 'crypto';

// const hash=crypto.createHash('sha256').update("TANISH TANDON").digest("hex");

// console.log(hash);


//echo -n "Hello World" | openssl dgst -sha256






// import crypto from 'crypto';

// const hash=crypto.createHash('sha256').update(Buffer.from("TANISH TANDON\n\r")).digest("hex");

// console.log(hash);




// const hash=crypto
//  .createHash('sha256')
//  .update("Hello ")
//  .update("World")
//  .digest("base64");

// console.log(hash);
 



// import crypto from 'crypto';
// import { readFileSync } from 'fs';
// import { readFile } from 'fs/promises';



// const filedata=readFileSync("/Users/tanishtandon/Downloads/video.mp4");

// const hash=crypto.createHash('sha256').update(filedata).digest("hex");

// console.log(hash);





// console.log(Buffer.from("pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=","base64").toString("hex"));  



// createHash is used to create a hash object that can be used to generate a hash value based on the input data. It takes the name of the hashing algorithm as an argument (e.g., 'sha256', 'md5', etc.) and returns a hash object that can be updated with data and then finalized to produce the hash value.

// DIGITAL SIGNATURES

// A digital signature is a cryptographic mechanism used to verify the authenticity and integrity of a message, document, or piece of data. It is created using a private key and can be verified using the corresponding public key. Digital signatures provide a way to ensure that the data has not been tampered with and that it comes from a trusted source. They are commonly used in secure communications, software distribution, and legal documents to establish trust and non-repudiation.














import crypto from 'crypto';

import {readFile} from "node:fs/promises";
import {createWriteStream} from "node:fs";







const fileContent=await readFile("loan-agreement.md");
const mySecretKey="my-super-secret-key";









const signature=crypto
.createHash('sha256')
.update(fileContent)// this data is being hashed
.update(mySecretKey)
.digest("base64url");






const writeStream=createWriteStream("loan-agreement-signed.md");

writeStream.write(fileContent);
writeStream.end(signature);






console.log(signature);





//const signature=original data+secret key--->hash value
//signed file=original data+signature

//verifying the signature
//hash value==>original data+secret key--->hash value

