// call mr Leader
const express = require("express");
var route = express.Router();

// call multer for parsing fles
const upload = require("../middleware/multer");

// Calls Controller
const diseaseController = require("../controller/disease");

/* Defining Routes */
 // Post routes

 route.post("/post_disease", upload.single("img"),diseaseController.postDisease);


 // get routes
 route.get("/get_disease", diseaseController.getDisease);


 // exports route
 module.exports = route;
