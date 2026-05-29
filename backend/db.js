import mongoose, { Schema } from "mongoose";

const Schema = Schema.mongoose();

const userSchema = new Schema({
    first_name : String,
    last_name : String,
    email : String,
    password : String
})

const courseSchema = new Schema({
    title : String,
    description : String ,
    price : Number ,
    imageUrl : Number ,
    creatorID : mongoose.Schema.Types.ObjectId
})

// 1;08;00 from lect1