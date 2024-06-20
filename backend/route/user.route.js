import express from "express" //for routes
import { login, signup, getUser} from "../controller/user.controller.js"
const router=express.Router()



//post
router.post("/signup",signup)
router.post("/login",login)
router.get("/getuser/:id",getUser)
export default router
