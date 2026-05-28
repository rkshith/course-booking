import express from 'express'

const router = express.Router()

router.get("/allcourses",(req,res)=>{
    res.json({
        "courses":"all couses , course1, course2, course3"
    })
})

router.post("/purchases",(req,res)=>{
    res.json({
        "user":"purcase end point"
    })
})


export default router