import mongoose from "mongoose"
import { Schema , ObjectId } from "mongoose"

await mongoose.connect("mongodb://localhost:27017/online_course_platform").then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log("error connecting to database",err);
})

const userSchema = new Schema({
    first_name : String,
    last_name : String,
    email : { type: String, unique: true },
    password : String
})

const courseSchema = new Schema({
    title : String,
    description : String ,
    price : Number ,
    imageUrl : String ,
    creatorID : mongoose.Schema.Types.ObjectId
})

const adminSchema = new Schema({
    email: {type: String , unique: true},
    password: String,
    first_name: String, 
    last_name: String 
})


/*
here 
userid 1 can have multiple courses like
cs101,cs102 

we should map the userId with his courseId 
*/

const purchaseSchema = new Schema({
    courseId: { type: ObjectId, ref: "courseSchema" },
    userId: { type: ObjectId, ref: "userSchema" }
})

export const userModel = mongoose.model("user",userSchema)
export const adminModel = mongoose.model("admin",adminSchema)
export const courseModel = mongoose.model("course",courseSchema)
export const purchaseModel = mongoose.model("purchase",purchaseSchema)
