




const user=await User.findOne({"email":"ta23@gmail.com"
})


user.age=30;

user.save();







const user=await User.findOneAndUpdate({name:"THE RIT TANDON"},{age:2},{new:true,runValidators:true});





const user=await User.findOne({"email":"ta23@gmail.com"
})
