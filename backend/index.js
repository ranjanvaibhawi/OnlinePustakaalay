import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import bookRoute from "./route/book.route.js"
const app=express()  //app se hi request aati jaati hai 
app.use(cors()) //to connect to backend
dotenv.config()
const PORT=process.env.port || 4000

///connect to database

const URL=process.env.MongoURL
try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


//define routes

//a api request ,goes to route.js which then goes to controller
app.use("/book",bookRoute)





app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)})