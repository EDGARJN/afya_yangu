// require mongoose fot schema creation
const mongoose = require("mongoose");

// Define schema
const schema = mongoose.Schema;

// Diseases Schema
diseases_schema = schema({
    title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    reg_date:{
        type:Date,
        default: Date.now()
    }
});

module.exports = diseases_schema;