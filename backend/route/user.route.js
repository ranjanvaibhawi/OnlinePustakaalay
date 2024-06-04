import express from "express" //for routes
import { login, signup } from "../controller/user.controller.js"
const router=express.Router()



//post
router.post("/signup",signup)
router.post("/login",login)
export default router
