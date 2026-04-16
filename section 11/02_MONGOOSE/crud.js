import User from "./UserModel.js";









const user=await User.findOneAndDelete({"email":"ta23@gmail.com"
})







console.log(user); 