import express from 'express'
import { adminModel } from '../db.js'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import adminMiddleware from '../middlewares/admin.js'

const router = express.Router()

router.post("/signup", async (req,res)=>{
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


router.post("/login", async (req,res)=>{
    const { email, password } = req.body;
    adminModel.findOne({ email }).then((admin) => {
        if (!admin) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        bcrypt.compare(password, admin.password).then((isMatch) => {
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid email or password" });
            }
            const token = jsonwebtoken.sign({ adminId: admin._id }, "secretkey");
            res.json({ token });
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    })
})



router.post("/course",adminMiddleware,async(req,res)=>{
    const { title, description, price, imageUrl } = req.body;
    const adminId = req.adminId;
    /**
     * 
     *     title : String,
         description : String ,
         price : Number ,
         imageUrl : String ,
         creatorID : mongoose.Schema.Types.ObjectId
     */
    await courseModel.create({ title, description, price, imageUrl, adminId })
     res.json({
        message:"Course created successfully"
     }).catch((err)=>{
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
     })
})

router.put("/course",adminMiddleware,async(req,res)=>{
    const { courseId, title, description, price, imageUrl } = req.body;
    await courseModel.findOneAndUpdate({ _id: courseId, creatorID: req.adminId }, { title, description, price, imageUrl }).then(() => {
        res.json({ message: "Course updated successfully" });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    })
})


router.get('/dashboard',(req,res)=>{
    res.json({"admin":"dashboard"})
})

export default router