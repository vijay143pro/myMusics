const express=require('express');
const app=express()
const port=4000;
const mongoose=require('mongoose')

//middleware

app.use(express.json())

//db connection
mongoose.connect("mongodb+srv://vijayaragavan:suryajabro@cluster0.tl9mitk.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("db connected");
})

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

//router
const router=require('./router/routes')
app.use("/post",router)

const songs=require('./router/songs')
app.use('/songs',songs)



//start server
app.listen(port,()=>console.log(`server running in http://localhost:${port}`))

