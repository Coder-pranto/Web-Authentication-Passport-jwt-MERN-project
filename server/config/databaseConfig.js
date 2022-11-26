const mongoose = require('mongoose')
require("dotenv").config();
const uri = process.env.URI ||'mongodb://localhost:27017/passwordJWTdb'

const connectDatabase = async()=>{
    try {
      await  mongoose.connect(uri , { useNewUrlParser : true, useUnifiedTopology : true})
      console.log('> Database Connected...'.bgCyan);
    } catch (error) {
        console.log(`> Error while connecting to mongoDB : ${error.message}`.underline.red );
        process.exit(1);  
    }
}

module.exports = connectDatabase;