const bcrypt=require("bcrypt")
const encryptdata=(req,res,next)=>{
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        // Store hash in your password DB.
        if(err)
        {
            console.log(err)
        }
        else{
            console.log("success")
            req.body.password=hash
            next()
        }
    });

}

module.exports={
    encryptdata
}