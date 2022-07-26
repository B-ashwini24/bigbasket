const Products=require("../models/products")

const savedata=(req,res)=>{
        console.log(req.body)
        const products=new Products({
                prod_id:req.body.prod_id,
                prod_name:req.body.prod_name,
                quantity:req.body.quantity,
                price:req.body.price,
                category:req.body.category,
                url:req.body.url

        })
        products.save().then(result=>{
                    res.send({
                        data:result,
                        message:"data saved"
                    })
        }).catch(err=>{
            console.log(err)
        })
}


const getdata=(req,res)=>{
    console.log(req.query)
    const {name} = req.query
        let obj={}
      if(name){
        obj.prod_name = {$regex:name, $options:'i'} 
      }
    Products.find(obj).then(result=>{
                res.send({
                    data:result
                })
                console.log(result)
    }).catch(err=>{
        console.log("no products")
    })
}

module.exports={
    getdata,savedata
}