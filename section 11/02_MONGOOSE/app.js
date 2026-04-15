// side effects import
import "./db.js";

import "./UserModel.js";


console.log("APP.JS FILE EXECUTED");

// import sbse phele excecute hote hain to db.js aur UserModel.js ke andar ke code ko execute karne ke liye side effects import ka use kiya hai.

// db object mongoose ke andar create hota hai jab mongoose.connect() function call hota hai. isliye db object ko directly import nahi kar sakte hain. isliye humne db.js file ko side effects import kiya hai taki uske andar ka code execute ho jaye aur db object create ho jaye.