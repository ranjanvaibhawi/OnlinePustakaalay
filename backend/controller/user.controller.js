import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"
import { sendMail } from "../helpers/mail.js"
export const signup=async(req,res)=>{
    try{
        const {fullname,email,password}=req.body
        const user=await User.findOne({email}) //await since db is use
        if(user) {
            return res.status(400).json({message:"User already exists"})
        }
        const hashPassword=await bcryptjs.hash(password,10)
        //else create new user:-
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save()  //gets saved in User collection
        sendMail(createdUser.email,"Welcome to OP! ", `Hellooooo ${fullname} This is Online Pustakaalay , MNNIT's library on your fingertips!  
         We wish you Happy learning`)
        res.status(201).json({message:"User created succesfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
        },})
    }catch(error){
        console.log("Error:"+error.message)
        return res.status(500).json({message:"internal server error"})
    }
}

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body
        //find in db  (everytime we communicate with database use await)
        const user=await User.findOne({email}) 
        const isMatch=await bcryptjs.compare(password,user.password) //user.password is from db password is from client
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }else {
            return res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    }catch(error){
        console.log("Error:"+error.message)
        return res.status(500).json({message:"internal server error"})
    }
}