const mongoose = require('mongoose');

const db = main().catch(err=>console.log("Error in Database Connection",err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');
    console.log('Database Connected Successfully');
}

module.exports = db;