import { ObjectId } from "mongodb";

import Todo from "../models/todoModel.js";





export const addTodo=async(req,res)=>{
  const todo=req.body;

  try{



// await req.db.collection("todos").insertOne({...todo,completed:todo.completed || false});


await Todo.insertOne(todo);

// res.status(201).json(newTodo );

res.redirect('/todos')

    // res.redirect("/todos"); 

    // res.status(201).json(result);
  }

  catch(error){

    console.log(error);
    res.status(500).json({error:"failed to create todo"});

  }
};


















export const getAllTodos=async(req,res)=>{
  try{
    // const todos=await req.db.collection("todos").find().toArray();


    const todos=await Todo.find();
   
    // res.status(200).json(todos);


    res.render("index",{todos});



   



  }



  catch(err){

    console.log(err);
    res.status(500).json({error:"failed to fetch todos"});
  }
};





















export const getTodoById=async(req,res)=>{
  try{
    const todos=await req.db.collection("todos").findOne({_id:new ObjectId(req.params.id)});



    res.status(200).json(todos);
  }

  catch(error){
    console.log(error);
    res.status(500).json({error:"failed to fetch todos"});

  }
};
































export const updateTodo=async(req,res)=>{
  
  const {id}=req.params;

  const updateTodo=req.body;


  try{
    await Todo.findByIdAndUpdate(id,updateTodo); 


    // if(result.modifiedCount===0){
    //   return res.status(404).json({error:"not updated"});

    // }
    res.status(200).json({message:"todo updated successfully"});
  }



  catch(error){
    res.status(500).json({error:"failed to update todo"});

  }
};


































export const deleteTodo=async(req,res)=>{
  const {id}=req.params;

  try{
    const result=await Todo.findByIdAndDelete(id);


console.log(result);




  //   if(result.deletedCount===0){
  //     return res.status(404).json({error:"Todo not found"});
  // }

  res.status(200).json({message:"Todo deleted successfully"});

}
catch(error){
  res.status(500).json({error:"Failed to delete todo"});

}

};