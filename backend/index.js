import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import changepass from './route/change.password.js'
const app=express()  //app se hi request aati jaati hai 
app.use(cors()) //to connect to backend
app.use(express.json()) //post request ke liye json 
dotenv.config()
const PORT=process.env.port || 4000

///connect to database

const URL=process.env.MongoURL
try {
    mongoose.connect(URL);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


//define routes

//a api request ,goes to route.js which then goes to controller
app.use("/book",bookRoute)
app.use("/user",userRoute)  //these are api endpoints
app.use("/change",changepass)




app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)})