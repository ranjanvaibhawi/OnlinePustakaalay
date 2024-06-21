import express from "express" //for routes
import { changepassword } from "../controller/change.controller.js"
const router=express.Router()



//post
router.post("/changepassword",changepassword)
// router.post("/login",login)
export default router
