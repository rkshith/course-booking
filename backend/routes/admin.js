import express from 'express'
import { adminModel } from '../db.js'

const router = express.Router()

router.post("/signup",(req,res)=>{
    const { email, password, first_name, last_name } = req.body;
    // should hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new adminModel({ email, password: hashedPassword, first_name, last_name });
    admin.save().then(() => {
        res.json({ message: "Admin registered successfully" });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }) 
})

router.post("/login",(req,res)=>{
    

})


router.post("/course",(req,res)=>{
    res.json({
        message:"admin"
    })
})

router.put("/course",(req,res)=>{
    res.json({
        message:"admin"
    })
})


router.get('/dashboard',(req,res)=>{
    res.json({"admin":"dashboard"})
})

export default router