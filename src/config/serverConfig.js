// Here we will require everything ->
// cleaner way to setup 

const dotenv = require("dotenv"); // this returns dotenv object

dotenv.config();

module.exports = {
  //This helps us to export from the .env
  PORT: process.env.PORT,
};
