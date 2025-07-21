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
router.post("/auth/signup",async(req,res)=>
const {email.password}=> req.body;
const existing
)