// require a project leader
const express = require("express");
var app = express();
 
// secret server
require("dotenv/config");

// For parsing data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("assets/", express.static(__dirname+"/assets/"));

// Call Route owner
const router = require("./router/route");

// Middleware
app.use("/api", router);



// Database connection
const db = require("./config/db");
db();

// start server
const port = process.env.PORT;
app.listen(port,()=>{console.log(`Server listenning on port ${port}`)});
