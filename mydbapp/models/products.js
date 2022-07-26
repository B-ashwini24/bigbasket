const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
        prod_id:{
            type:Number
        },
        url:{
            type:String
        },
        price:{
            type:Number
        },
        category:{
            type:String
        },
        quantity:{
            type:Number
        },
        prod_name:{
            type:String
        }


})

module.exports=mongoose.model("Products",productSchema)