

// require("dotenv").config()
const app=require("./app")
// const port=process.env.PORT || 8081
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/mydb").then(data=>{
    app.listen(9001,()=>{
        console.log("server running")
    })
}).catch(err=>{
    console.log(err)
})
