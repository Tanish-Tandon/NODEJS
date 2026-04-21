


















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


const user=await User.find({email:"tandon123@gmail.com"})

console.log(user);






// console.log(user.toJSON({virtuals:true}));// jo extra hoghi vo bhi dikhjaegi virtual true kardo toh


await mongoose.disconnect();

