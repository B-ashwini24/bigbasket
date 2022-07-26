const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
const {prodrouter}=require("./routes/prod.routes")
const {custrouter}=require("./routes/cust.routes")
// app.use("/Product",prodrouter)

// app.use(express.urlencoded({ extended: true }))
const User=require("./models/user")

app.use("/prod",prodrouter)
app.use("/customer",custrouter)
const {signup,login,allowaccess}=require("./controllers/userauth")
const {encryptdata}=require("./middlewares/userpass")

app.post("/signup",encryptdata,signup)
app.post("/login",login,allowaccess)

module.exports=app;
