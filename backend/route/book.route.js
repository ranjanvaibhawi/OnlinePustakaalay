import express from "express" //for routes
import { getBook,addbooks,getbookbyuser,buybooks,mybooks,getbookbyid} from "../controller/book.controller.js"
const router=express.Router()


//on requesting / we must have the funciton getbook runned


//this is a api created
router.get('/',getBook) 
router.post('/addbook/:userId',addbooks)
router.post('/buybook/:id/:userId',buybooks)
router.get('/getbooks/:userId',getbookbyuser)
router.get('/mybooks/:userId',mybooks)
router.get('/getabookbyid/:id',getbookbyid)
export default router

//exported to index.js

