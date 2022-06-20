// require mongooses
const mongoose = require("mongoose");

// call properties
const props = require("./props");
var db_url = props.DB;

module.exports= ()=>{
    var needed = {
        useNewUrlParser: true,
        useUnifiedTopology:true
    };

    mongoose.Promise = global.Promise;
    mongoose.connect(db_url,needed);

    // checl connectivity
    mongoose.connection.on("connected",()=>{console.log(`DB started on ${db_url}`)});
    mongoose.connection.on("error",(err)=>{console.log(`Error occur on database due to ${err}`)});

};
