const {DataTypes } = require("sequelize");
const { transaction } = require("../models/transactionModel");

const addTransaction = async(req,res)=>{
    let data = {
        weight:req.body.weight,
        date:req.body.data ,
        paid:req.body.paid,
        received:req.body.received??true,
        employeeModelId:req.body.employeeModelId,
        paidamount:req.body.paidamount
    };

    let create = await transaction.create(data);
    res.status(201).json(create);
};

const getAllTransaction = async(req,res)=>{
    let data = await transaction.findAll({order:[["updatedAt","DESC"]] });
    try{
        
    if(!data){
        return res.status(400).json({msg:"no transaction"});
    }
    }catch(e){
        return res.status(400).json({msg:`${e}`});
    }
    return res.status(200).json(data);
    
};
const getoneemployeeTransaction = async(req,res)=>{
    let data = await transaction.findAll({where :{employeeModelId :req.params.employeeModelId},order:[["updatedAt","DESC"]] });
    try{
        
    if(!data){
        return res.status(400).json({msg:"no transaction"});
    }
    }catch(e){
        return res.status(400).json({msg:`${e}`});
    }
    return res.status(200).json(data);
    
};
const getAllreceivedTransaction = async(req,res)=>{
    let data = await transaction.findAll({where :{received :true},order:[["updatedAt","DESC"]] });
    try{
        
    if(!data){
        return res.status(400).json({msg:"no transaction"});
    }
    }catch(e){
        return res.status(400).json({msg:`${e}`});
    }
    return res.status(200).json(data);
    
};
const getAllgivenTransaction = async(req,res)=>{
    let data = await transaction.findAll({where :{received :false},order:[["updatedAt","DESC"]] });
    try{
        
    if(!data){
        return res.status(400).json({msg:"no transaction"});
    }
    }catch(e){
        return res.status(400).json({msg:`${e}`});
    }
    return res.status(200).json(data);
    
};
exports.addTransaction = addTransaction;
exports.getAllTransaction = getAllTransaction;
exports.getoneemployeeTransaction = getoneemployeeTransaction;
exports.getAllreceivedTransaction = getAllreceivedTransaction;
exports.getAllgivenTransaction = getAllgivenTransaction;