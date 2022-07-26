const express=require('express')

const prodrouter=express.Router()
const {savedata,getdata}=require("../controllers/prod.controller")

 const { prodmiddleware}=require("../middlewares/prod.middleware")
prodrouter.post("/savedata", prodmiddleware,savedata)
prodrouter.get("/getdata",getdata)
// custrouter.delete("/delete/:id",deletedata)
// custrouter.put("/edit",editdata)
// custrouter.put("/deleteall",deleteall)

module.exports={
    prodrouter
}