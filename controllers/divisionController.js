const { divisionModel } = require("../models/divisionModel");
const employeeModel = require("../models/employeeModel");
const { locations } = require("../models/locationsModel");
const { transaction } = require("../models/transactionModel");


const addDivision =async (req,res)=>{
    let createDivision = {
        division:req.body.division,
        fkm:req.body.fkm,
        tkm:req.body.tkm,
        weight:req.body.weight,
        price:req.body.price
       };
   try{
    let add = await divisionModel.findOne({where:{division : req.body.division}});
   
    if(!add){
    let created = await divisionModel.create(createDivision);
    await created.save();
    return res.status(201).json(created);
    }else {
     return res.status(400).json({msg:"division already exist"});
    }
   }catch(err){
    return res.status(400).json({msg:`${err}`});
   }
};

const getDevision = async (req,res)=>{
    let data = await divisionModel.findAll(
    //     {
    //     include:[{
    //         model:locations,
    //         as:"locations",
    //         include : [{
    //             model:employeeModel,
    //             as:"employees",
    //             include:[{
    //                 model:transaction
    //             }]
    //         }]
    //     }]
    // }
    );
    res.status(200).json(data);
};

const updateDivision = async(req,res)=>{
    let find = await divisionModel.findOne({where:{id:req.body.id}});
    if(!find){
        return res.status(400).json({msg:"can't update"});
    }
    try{
        await find.update({
            fkm:req.body.fkm,
            price:req.body.price,
            weight:req.body.weight,
            tkm:req.body.tkm
        });
        return res.status(200).json(find);
    }catch(err){
        return res.status(400).json({msg:`${err}`});
    }
    
};

exports.addDivision = addDivision;
exports.updateDivision = updateDivision;
exports.getDevision = getDevision;