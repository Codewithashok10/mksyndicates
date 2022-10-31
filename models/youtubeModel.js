const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const youtubeModel =  sequelize.define("userdata",{
    name:DataTypes.STRING,
    age:DataTypes.INTEGER,
    address:DataTypes.STRING,
    mobile_no: DataTypes.STRING
});

exports.youtubeModel = youtubeModel;

const adduser = async(req,res)=>{
   let data = {
    name:req.body.name,
    age:req.body.age,
    address:req.body.address,
    mobile_no:req.body.mobile_no
   };
   let users = await youtubeModel.create(data);
   return res.status(201).json({users});
};

const updateuser = async(req,res)=>{
    let data = {
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        mobile_no:req.body.mobile_no
       };
    let find = await youtubeModel.findOne({where:{id:req.body.id}});
    if(find){
        await find.update(data);
    }
    return res.status(200).json(find);
 };

 const getUser = async(req,res)=>{
   
    let users = await youtubeModel.findAll();
    return res.status(200).json(users);
 };


 const deleteUser = async(req,res)=>{
   
    let users = await youtubeModel.findOne({where:{id : req.params.id}});
    await users.destroy();
    return res.status(200).json(users)
 };

 exports.youtubeModel = youtubeModel;
 exports.adduser = adduser;
 exports.updateuser = updateuser;
 exports.deleteUser = deleteUser;
 exports.getUser = getUser;
