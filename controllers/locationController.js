const { locations } = require("../models/locationsModel");






const addLocations = async(req,res)=>{
     let data = {
        location:req.body.location,
        divisionModelId:req.body.divisionModelId
     };
   let find = await locations.findOne({where:{location:req.body.location}});
   
    if(find){
        
        return res.status(400).json({msg:"alredy exists"});
    }
    try{
        let location = await locations.create(data);
        return res.status(201).json(location);
    }catch(err){
        return res.status(400).json({msg:`${err}`});
           
    }
    
};


const getLocations = async(req,res)=>{
    let location = await locations.findAll();
    return res.status(200).json(location);
};

exports.addLocations = addLocations;
exports.getLocations = getLocations;