//model chahiye hoga

import Book from "../model/book.model.js"

export const getBook=async(req,res)=>{   //we have used async here beacuse communication with database is asynchronous
     try{
     const book=await Book.find()  //since its asynchrnous operation
     res.status(200).json(book) //res 400 is taht of success
     }
     catch(error){
console.log("error in controller",error)
res.status(500).json(error)  //500 is internal server errror
     }

}


//exported too book.route.js
