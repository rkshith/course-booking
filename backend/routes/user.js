import express from 'express'
import { userModel, adminModel, courseModel, purchaseModel } from '../db.js'
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const router = express.Router();


// i want to hash the password before saving it to the database

router.post("/signup",async (req,res)=>{
    const { first_name, last_name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ first_name, last_name, email, password: hashedPassword });
    user.save().then(() => {
        res.json({ message: "User registered successfully" });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    })
})


router.post("/login",async (req,res)=>{
    const { email, password } = req.body;
    userModel.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid email or password" });
            }
            const token = jsonwebtoken.sign({ userId: user._id }, "secretkey");
            res.json({ token });
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    })

})


router.get("/courses",(req,res)=>{
    res.json({
        "user":"wil purchase course"
    })
})

export default router;