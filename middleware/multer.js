// require mr multer for files parsing
const multer = require("multer");

// Storage and file naming configuyration
var multerStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"assets/images")
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now() + "disease"+file.originalname);
    }
});

// uploading method
var upload = multer({storage:multerStorage});

// exports upload key
module.exports = upload;
