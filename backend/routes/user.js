import express from 'express'


const router = express.Router();

router.post("/login",(req,res)=>{
    res.json({
        "user":"signin end point"
    })

})

router.post("/signup",(req,res)=>{
    res.json({
        "user":"regestration page"
    })

})

router.get("/courses",(req,res)=>{
    res.json({
        "user":"wil purchase course"
    })
})

export default router;