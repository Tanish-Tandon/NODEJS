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






import crypto from 'crypto';

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





console.log(Buffer.from("pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=","base64").toString("hex"));  