const express = require ("express");
const mongoose = require ("mongoose");
const jwt = require ("jsonwebtoken");
const bcript = require("bcript");
const router = express.router();

const User =mongoose.model('User',new mongoose,Schema
( 
   { email:String,
    password:String}
));

//signup router
router.post("/auth/signup",async(req,res)=>{
const {email.password}=> req.body;
const existingUser=await User.findOne({email});
if(existingUser){
    return res.status(400), json({error:"already exist"});
}
const hashedPassword =awit bcript.hash([password]);
const user=new User ({email,password:hashedPassword});
await user.save();
const token=jwt.sign({userId:user._id},'secrest',{expireIn:'1h'});
res.status(200).json({token});

})