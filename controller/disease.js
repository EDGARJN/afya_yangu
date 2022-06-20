// call  disease model
const disease_model = require("../model/disease");

// Methods For data manipulation on diseases.

// post data to the database
exports.postDisease =  async(req,res)=>{
    var dataForPosting = {
        title: req.body.title,
        img: req.file.path,
        description: req.body.desc
    }
    disease_model.post(dataForPosting,(err,data)=>{
        if(!err){
            res.status(200).json({msg:"Data posted successfully",data});
            console.log(`New data inserted ${data}`)
        }else{
            res.status(401).json({msg:"Failed to post data due to",err});
            console.log(`Errror while posting data due to: ${err}`);
        }
    })
};

// Pull diseases info from database
exports.getDisease = async(req,res)=>{
     await disease_model.get({},(err,result)=>{
        if(!err){
            res.status(200).json({msg:"Data pulled Successfully: ", result});
            console.log(`Data pulled sucessfully:  ${result}`)
        }else{
            res.status(401).json({msg:"Error while trying to pull data due to: ", err});
            console.log(`Error occur due to:  ${err}`);
        }
    });
}

module.exports;