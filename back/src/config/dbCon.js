require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () =>{
 
    await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}.4fsh96u.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=${process.env.CLUSTER}`);
  
};

module.exports = dbCon;
