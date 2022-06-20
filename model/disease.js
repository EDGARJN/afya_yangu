// require mognoose
const mongoose = require("mongoose");

//  call diseases schema
const diseaseSchema = require("../schema/disease");

// mongoose statics
diseaseSchema.statics = {
    post: function(data,cb){
        var dataToSave = new this(data);
        dataToSave.save(cb);
    },
    
    get: async function(query,cb){
        await this.find(query,cb);
    }
};

var diseaseModel = mongoose.model("disease",diseaseSchema);

// exports model
module.exports = diseaseModel;