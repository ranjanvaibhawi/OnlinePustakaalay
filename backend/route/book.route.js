import express from "express" //for routes
import { getBook } from "../controller/book.controller.js"
const router=express.Router()


//on requesting / we must have the funciton getbook runned


//this is a api created
router.get('/',getBook)   //since its get req thus get in axios (coursejsx)
export default router   

//exported to index.js

