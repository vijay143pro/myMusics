const express=require('express');
const route=express.Router()
const register=require('../models/registerSchema')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

route.post("/",async(req,res)=>{
    try{
    var userExistance=await register.findOne({email:req.body.email});
    if(userExistance) return res.status(400).json({error:"email already exist"});
    var hash=await bcrypt.hash(req.body.pass,10)
   var data=new register({
    name:req.body.name,
    dob:req.body.dob,
    email:req.body.email,
    pass:hash
   })
   await data.save();
   res.json(data)
}
catch(err){

}
})


route.post("/login",async(req,res)=>{
    try{
        var userData = await register.findOne({email:req.body.email})
        if (!userData) return res.status(400).json({ error: "Email not exit" });
    
    var validPass=await bcrypt.compare(req.body.pass,userData.pass)
    if(!validPass){
        return res.status(400).json("password is not valid")
    }
    var userToken= await jwt.sign({email:userData.email},'secret')
    res.header('auth',userToken).send({"status":200,"message":"login successfully",
    "access-token":userToken,"userId":userData._id});
    }
    catch(err){
            console.log(err);
    }
})

module.exports=route