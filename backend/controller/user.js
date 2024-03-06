const User=require('../models/user');
const asyncErrorHandler=require('express-async-handler')

const createUser=asyncErrorHandler(async (req,res)=>{

    const email=req.body.email;
    // console.log(req.body.email);
    const user=await User.find({email});
    console.log(user);
    if(user.length==0){
        const newUser=await User.create(req.body);
        res.json(newUser)
    }
    else{
        throw new Error("User already exists!");
    }
})

module.exports={createUser};