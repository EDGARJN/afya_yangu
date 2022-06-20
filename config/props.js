// secret server
require("dotenv/config");

// exports properties
module.exports = {
    DB: process.env.LOCAL_URL
};