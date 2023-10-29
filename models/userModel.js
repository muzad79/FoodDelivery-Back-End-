const mongoose =  require('mongoose')

const userTemplate = {
        name:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            default:Date.now
        }


}
const userSchema = new mongoose.Schema(userTemplate)
const userModel = mongoose.model("users",userSchema)
module.exports=userModel