import express from "express";

import {  rm, writeFile } from "fs/promises";

import directoriesData from '../directoriesDB.json' with {type: "json"}

import usersData from "../usersDB.json" with {type :'json'};
import { dir, error } from "console";
import CheckAuth from "../middlewares/authMiddleware.js";
import crypto from "crypto";
import { Db, ObjectId } from "mongodb";
import { use } from "react";
import { getCurrentUser, login, logout, register } from "../controllers/userController.js";
// import { client } from "../dbTransaction.js";



// mongodb size 16 megabyte

// status code 300 ka aur headers location agaya redirect hojaega http


// const router = express.Router();















const router=express.Router();

router.post('/register',register)









router.post('/login',login);













router.get('/',CheckAuth,getCurrentUser);













router.post('/logout',logout);




export default router;






















