import User from "./UserModel.js";



// const query=User.find({email:"tand3@gmail.com"},{name:1});  // yeh bhi kaam karega but select method zyada flexible hai projection ke comparison mein




// const query=User.find({email:"tand3@gmail.com"});


// query.select("name");





// query.select("name age");


// query.projection({name:1,age:1});



// query.select({name:1});



// query.select("-name");// sabh aaega lekin name nhi aega








// const query=User.find({age:{$gte:15}});

//OR

const query=User.where('age').gte(20).lte(23).select("name age").sort({age:-1}).exec();// abh yeh promise hoagayaa
// exec


// query.select("name age").sort({age:-1});





// console.log(query.getQuery());// jo query variable connect hai waha sai link hai iska



console.log(await query);



// console.log(query.projection());//{ name: 1, age: 1 }
// console.log(await query);

// console.log(await query.exec());




// console.log(await query.exec()); // exec ki jarurat nhi hai await .then use karte hi excecute hojati hai

// const users = await User.find({ age: { $gte: 18 } })




//   .sort({ name: 1 })
//   .limit(10)
//   .select("name age");





// “The exec() method in Mongoose executes a query and returns a real Promise instead of a thenable query object.”


// const user=await User.findOneAndDelete({"email":"ta23@gmail.com"
// })







// console.log(user); 





// User.find({}).exec().then(console.log);

// 👉 Promise style

// ⚡ 6. Chain queries + exec
// User.find({ age: { $gt: 18 } })
//     .select("name email")
//     .sort({ age: -1 })
//     .limit(5)
//     .exec()
//     .then(console.log);

// 👉 .exec() end me lagta hai