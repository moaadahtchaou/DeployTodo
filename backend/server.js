const express=require("express")
const app =express()


// Routes
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3500,()=>{
        console.log("connect to db and listen",3500)
    })

    
