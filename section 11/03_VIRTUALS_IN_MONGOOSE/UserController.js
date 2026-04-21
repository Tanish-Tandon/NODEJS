


















import mongoose from "mongoose";

import User from "./UserModel.js";


// const user=await User.findOne({email:"tand3@gmail.com"})


// console.log(user._id);//new ObjectId('69e005a0fbcc45b1aff01e42'). vo object id format



// console.log(user.id);//69e005a0fbcc45b1aff01e42 string value


// console.log(user);



// console.log(user.schema.virtuals);


// console.log(User.schema.virtuals);







// console.log(user.isAdult);




// user.hobbiesString="TT,Football";
// console.log(user.hobbiesString);

// console.log(user.emailDomain);

// await user.save();



// below dono virtual property include karke dega

// console.log(user.toObject());

// console.log(user.toJSON());// jo extra property hoghi vo nhi dikegi isme 





// user.hobbiesString="TT,Football";

// console.log(user.hobbiesString);
// console.log(user.emailDomain);











// console.log(user.getSummary());



// const user1=new User();// jo property class par hoti hai usko static property bolte hai




// const user=await User.findByEmail("tandon1234@gmail.com");





// console.log(user.getSummary('full'));


// const user=await User.find({email:"tandon123@gmail.com"})

// console.log(user);






//init save validate remove in document middleware







// console.log(user.toJSON({virtuals:true}));// jo extra hoghi vo bhi dikhjaegi virtual true kardo toh






// const user=new User({
//     name:'brazil',
//     age:48,
//     email:"brazil12@gmail.com",
    
// });


// const user=await User.find({name:"brazil"});

// use of await is mandatory
// const user=await User.findOne({name:"brazil"});

// const user1=await User.find({name:"brazil"});

// console.log(user);

// console.log(user1);




// const user=User.find({name:"TANISH THE KING OF ALL TIME"}); isme find find karke logic badha skte hai aur

// await user.save();




// const result=await User.insertMany([
//     {name:"braziliaa",age:96,email:"brazil12@gmail.com"},

//     {name:"brazilami",age:48,email:"brazil12@gmail.com"}

// ]);



// console.log(result);
// await mongoose.disconnect();







//automatic index create karta hai like toh agar phele sai duplicate value hai toh toh index nhi banega 





// index create when it have some time and also have unique true property





// schema level application level database level ka validation






// try{
    
// const user=await User.insertOne({
//     name:"TANISH TANDON",
//     age:44,
//     email:"tandonn123@gmail.com",
// });
// }
// catch(err){
//     console.log(err);


// }


// await User.init();




// ek hi document ko verify karnke ke liye concurrent request aa skti hai
// await User.init();

const user1=await User.findOne({email: "tandonn123@gmail.com"});


const user2=await User.findOne({email: "tandonn123@gmail.com"});

// yeh concurrency match nhi kar pati hai

console.log(user1.__v);

user1.balance+=500;
await user1.save();
console.log(user1.__v);



// user2.hobby.splice(1,1);
// console.log(user2.hobby);





console.log(user2.__v);

user2.balance+=200;
await user2.save();

console.log(user2.__v);




// User.updateOne({email:"tandonn123@gmail.com",__v:3});



// user1.age=62;
// await user1.save();

// versioning array mai settle hoghi hamesha

// user1.hobby.splice(0,1);
// console.log(user1.hobby);
// await user1.save();

// yeh user1 and user2 seperate chalege because of deletion and version increase hoghaya isliye


// user2.hobby.splice(1,1);
// console.log(user2.hobby);
// await user2.save()



// user2.age=78;
// await user2.save();


// user.age=52;


// user.hobby=['CRICKET',"FOOTBALL"];



// await user.save();
// console.log(user);
await mongoose.disconnect();





// console.log(user);


// setTimeout(async ()=>{
//     await mongoose.disconnect();
// },1000);


// time doge toh banjaega index kam sai kam 500