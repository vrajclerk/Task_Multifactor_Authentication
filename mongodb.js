const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/Authentication").then(()=>{
  console.log("connect to mongoDB successfully")
}).catch(()=>{
  console.log(err)
})

//Defining a Mongoose Schema for Email ,Password & OTP
const user =mongoose.Schema({
 // email:String,
 // password:String,
 email:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 },
 otp:{
  type:String

 }
},{ strict: false })   //allows to enable additional fields that are not explicitly defined in the schema
const User=mongoose.model("User",user); //creates a collection is Database
module.exports=User;