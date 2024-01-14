const corsOptions = require("./config/corsOptions")
const mongoose=require("mongoose")
const workout =require("./routes/workout")
const express=require("express")
const cors = require("cors")
const app =express()
app.use(cors(corsOptions))
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
mongoose.connect("mongodb+srv://moaadahtchao:moaad123456@todo.rsjey1v.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        //listen to req
        app.listen(3500,()=>{
        console.log("connect to db and listen",3500)
    })})
    .catch((err)=>res.send(err))
    
