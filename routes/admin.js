const {Router} = require("express")

const adminRouter = Router()

const {adminModel} = require("../db")
adminRouter.post("/signup",(req,res)=>{
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin",(req,res)=>{
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/course",(req,res)=>{
    res.json({
        message: "admin course endpoint"
    })
})

adminRouter.get("/course",(req,res)=>{
    res.json({
        message: "admin course endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}