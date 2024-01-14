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
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use("/api/workout",workout)

//Mongoose
app.listen(3500,()=>{
        console.log("connect to db and listen",3500)
    })



    
