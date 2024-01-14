require("dotenv").config()
const mongoose=require("mongoose")
const workout =require("./routes/workout")
const express=require("express")
const app =express()


app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
// Routes
app.use("/api/workout",workout)

//Mongoose
mongoose.connect(process.env.MONG_URL)
    .then(()=>{
        //listen to req
        app.listen(process.env.PORT,()=>{
        console.log("connect to db and listen",process.env.PORT)
    })})
    .catch((err)=>console.log(err))
    
