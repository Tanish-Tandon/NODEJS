

const user=await User.findOne({"email":"ta23@gmail.com"
});


console.log(user);











await.User.findOne({email:"ta23@gmail.com"}).lean();

await User.find().lean();








console.log(user);

