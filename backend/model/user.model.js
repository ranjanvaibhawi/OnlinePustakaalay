import mongoose, { mongo } from "mongoose"

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    myauthorisedbooks:{
        type:[mongoose.ObjectId]
    },
    mybooks:{
        type:[mongoose.ObjectId]
    }
})
const User=mongoose.model("User",userSchema)
export default User