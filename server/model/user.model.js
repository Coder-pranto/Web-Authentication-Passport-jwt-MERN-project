const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        dafault: Date.now,
    }
})

module.exports =  mongoose.model( 'user' , userSchema);