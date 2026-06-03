import express from "express";
import jsonwebtoken from 'jsonwebtoken';
import { Router } from 'express';
import userRouter from './routes/user.js'
import courseRouter from './routes/course.js'
import adminRouter from './routes/admin.js'
import mongoose from "mongoose";
import { connectDB } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express()   
const router = express.Router();
 
app.use(express.json())

app.use('/api/v1/user',userRouter);    
app.use('/api/v1/course',courseRouter)
app.use('/api/v1/admin',adminRouter)

// here we are using a 
// async function to connect to the database and then start the server


async function main(){
    try{
        await connectDB();
        app.listen(3000,()=>{
            console.log("server started on port 3000");
        })
    }
    catch(err){
        console.log(err);
    }
}

main()






// 1:11:00 watch the lect