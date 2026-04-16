
 await User.create(
    [
    {
    name:"THE SSR TANDON",
    age:21,
    email:"tandon123@gmail.com",
    hobby:["coding"],parentId:"69dfa0ce536ed0638fbc9ab6"
},


 
    {
    name:"THE SRK TANDON",
    age:23,
    email:"tand3@gmail.com",
    hobby:["cpp"],parentId:"69dfa0ce536ed0638fbc9ab6"
},













]);






// single bhi kar skte hai create ki jagah insertOne lagadi tabh bhi hojega

await User.create(
    
    {
    name:"THE SSR TANDON",
    age:21,
    email:"tandon123@gmail.com",
    hobby:["coding"],parentId:"69dfa0ce536ed0638fbc9ab6"
})














const user= new User(
    
    {
    name:"THE LMS TANDON",
    age:21,
    email:"ta23@gmail.com",
    hobby:["tech"],parentId:"69dfa0ce536ed0638fbc9ab6"
});


user.age=20;
user.hobby.push("coding");

const data=await user.save();

console.log(data);
