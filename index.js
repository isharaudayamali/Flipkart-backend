const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");

const app= express();
app.use(cors());

mongoose.connect("mongodb+srv://ishUser:Mc9kHdqN3tue0oQC@ishuser.cv7ahm6.mongodb.net/ecommerce",{useNewUrlParser:true,useUnifiedTopology:true})

app.listen(8080,()=> {
  console.log("server is running 8080");
})
