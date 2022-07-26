const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
        cust_id:{
                type:Number,
                default:1001
        },
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
        },
        totalbill:{
            type:Number
        }


})

module.exports=mongoose.model("Customer",customerSchema)