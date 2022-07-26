const Customer=require("../models/Customer")
const savedata=(req,res)=>{
    const customer=new Customer({
        cust_id:req.body.cust_id,
        prod_name:req.body.prod_name,
        quantity:req.body.quantity,
        category:req.body.category,
        prod_id:req.body.prod_id,
        url:req.body.url,
        price:req.body.price,
        totalbill:req.body.totalbill
    })
    customer.save().then(data=>{
        res.send({
            message:"data saved",
            data:data
        })
    })
    
}
const deletedata=(req,res)=>{
    Customer.deleteOne({_id:req.params.id}).then(response=>{
res.send({
    message:"item deleted"
})
    }).catch(err=>{
        console.log(err)
     })
}
const deleteall=(req,res)=>{
    Customer.deleteMany({id:req.params.id}).then(response=>{
res.send({
    message:"item deleted"
})
    }).catch(err=>{
        console.log(err)
     })
}
const editdata=(req,res)=>{
    const data=req.body
    //console.log(data)
    Customer.updateOne({_id:data._id},{$set:{quantity:data.quantity}}).then(response=>{
        res.send({
            message:"data updated"
        })
    }).catch(err=>{
        console.log(err)
    })
}
const edittotal=(req,res)=>{
    const data=req.body
   // console.log(data)
    Customer.updateOne({_id:data._id},{$set:{totalprice:data.totalprice}}).then(response=>{
        res.send({
            message:"data updated"
        })
    }).catch(err=>{
        console.log(err)
    })
}
const getdata=(req,res)=>{
    
    Customer.find().then(result=>{
        res.send({
            message:"result dound",
            data:result
        })
    })
}
module.exports={
    savedata,getdata,editdata,deletedata,deleteall,edittotal
}