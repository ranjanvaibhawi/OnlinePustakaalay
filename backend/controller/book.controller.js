//model chahiye hoga

import Book from "../model/book.model.js"
import User from "../model/user.model.js"

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


export const addbooks = async(req,res)=>{
     console.log(req.body);
     const userId = req.params.userId;
     try{
          const newbook = new Book(req.body);
          await newbook.save();
          const user = await User.findByIdAndUpdate(
               userId,
               { $push: { myauthorisedbooks: newbook._id } },
               { new: true }
          );
          res.status(200).json(newbook);
     }
     catch(e){
          console.log(e);
     }
}

export const getbookbyuser = async(req,res)=>{
     console.log(req.params.userId);
     const userId=req.params.userId
     try{
          const user =  await User.findById(userId);
          const authorisedbooks = user.myauthorisedbooks;
          const books = await Book.find({ _id: { $in: authorisedbooks } });
          res.status(200).json(books);
     } 
     catch(e){
          console.log(e);
     }
}

export const buybooks = async(req,res)=>{
     const userId = req.params.userId;
     const bookId = req.params.id;
     console.log(userId);
     console.log(bookId)
     try{
          const userr = await User.findById(userId);
          if (userr.mybooks.includes(bookId)) {
               return res.status(400).json({ message: 'Book already bought' });
             }
          const user = await User.findByIdAndUpdate(
               userId,
               { $push: { mybooks: bookId } },
               { new: true }
          );
          console.log(user)
          res.status(200).json({user})
     }
     catch(e){ 
          console.log(e);
     }
}

export const mybooks = async(req,res)=>{
     console.log(req.params.userId);
     const userId=req.params.userId
     try{
          const user =  await User.findById(userId);
          const mybooks = user.mybooks;
          const books = await Book.find({ _id: { $in: mybooks } });
          res.status(200).json(books);
     } 
     catch(e){
          console.log(e);
     }
}

export const getbookbyid = async(req,res)=>{
     const id = req.params.id;
     try{
          const book = await Book.findById(id);
          res.status(200).json(book);
     }
     catch(e){
          console.log(e);
     }
}

//exported too book.route.js
