const express=require('express')

const custrouter=express.Router()
const {savedata,getdata,editdata,deletedata,deleteall,edittotal}=require("../controllers/cust.controller")

 //const { prodmiddleware}=require("../middlewares/prod.middleware")
custrouter.post("/savedata", savedata)
custrouter.get("/getdata",getdata)
custrouter.delete("/delete/:id",deletedata)
custrouter.put("/edit",editdata)
custrouter.put("/edittotal",edittotal)
custrouter.put("/deleteall",deleteall)

module.exports={
    custrouter
}