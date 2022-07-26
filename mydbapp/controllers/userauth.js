const bcrypt=require("bcrypt")
const User=require("../models/user")
var jwt = require('jsonwebtoken');
const key="ashwini"
const signup=(req,res)=>{
    const user=new User({
        username:req.body.username,
        emailid:req.body.emailid,
        password:req.body.password
    })
    console.log("user"+user)
    user.save().then(response=>{
        console.log("data saved")
    }).catch(err=>{
        console.log(err)
    })
}
const login=(req,res,next)=>{
    console.log(req.body.emailid)
    User.findOne({emailid:req.body.emailid}).then(result=>{
       console.log("found")
        bcrypt.compare(req.body.password,result.password, function(err, result) {
            result == true
            var token = jwt.sign({emailid:req.body.emailid }, key);
           res.send({
            message:"success",
            token:token
           })
        });
        next()
    }).catch(err=>{
        console.log("user not found")
    })

}
const allowaccess=(req,res)=>{
    console.log("hello")
    jwt.verify(res.token, key, function(err, decoded) {
        console.log(decoded.foo) // bar
      });

}
module.exports={
    signup,
    login,
    allowaccess
}