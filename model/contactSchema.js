const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

const Contact_User = mongoose.model('contact',userSchema);


module.exports = Contact_User;
