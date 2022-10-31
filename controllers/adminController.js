const bcryptjs = require("bcryptjs");
const adminAuthModel = require("../models/adminModel");


const adminSignupController= async(req,res)=>{
   let hashpassword = await bcryptjs.hash(req.body.password,8);
   let data = {
        username:req.body.username,
        password : hashpassword
    };
   let detail = await adminAuthModel.create(data);
   await detail.save();
    return res.status(201).json(detail);
    
};

const adminSigninController = async(req,res)=>{
    const existuser = await adminAuthModel.findOne({where :{userName:req.body.username}});
    if(req.body.userName === null){
      res.status(400).json({msg:"username cant empyt"});
    }else
   if(!existuser){
    res.status(400).json({msg:"incorrect username"});
   }else{
    const check = await bcryptjs.compare(req.body.password,existuser.password);
    if(!check){
        return res.status(400).json({msg:"incorrect password"});
     }else{
        return res.status(200).json(existuser);
     }
   }
};

exports.adminSigninController = adminSigninController;
exports.adminSignupController = adminSignupController;
