


















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


const user=await User.findOne({name:"brazil"});

const user1=await User.find({name:"brazil"});

// console.log(user);
// console.log(user1);

// const user=User.find({name:"TANISH THE KING OF ALL TIME"}); isme find find karke logic badha skte hai aur

// await user.save();


await mongoose.disconnect();

