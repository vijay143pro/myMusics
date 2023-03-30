const mongoose=require('mongoose')


var user=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("userRegister",user)