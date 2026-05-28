import express from "express";
import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import { Router } from 'express';
import userRouter from './routes/user.js'
import courseRouter from './routes/course.js'
import adminRouter from './routes/admin.js'

const app = express()   
const router = express.Router();
 
app.use(express.json())

app.use('/api/v1/user',userRouter);    
app.use('/api/v1/course',courseRouter)
app.use('/api/v1/admin',adminRouter)

app.listen(3000, () => {
    console.log("server started on port 3000");
})




