import express from 'express'

const router = express.Router()

router.post("/login",(req,res)=>{
    res.json({
        "admin":"signin end point"
    })

})

router.post("/signup",(req,res)=>{
    res.json({
        "admin":"regestration page"
    })

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