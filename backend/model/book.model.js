import mongoose from "mongoose";  //we want to use database\



//1st step:create schema (all datas we want )
const bookSchema=mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
})


//2nd:create model
const Book=mongoose.model("Book",bookSchema)   //i.r bookSchema me jo bhi data hai vo Book me ayega 
export default Book


//exported to book.controllr