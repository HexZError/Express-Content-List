const express = require('express');
const path = require('path');
const db = require('./config/connection');
const Contact_User = require('./model/contactSchema')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(express.urlencoded())
app.use(express.static('assets'));

app.get('/',async (req,res)=>{
    try{
        const contacts = await Contact_User.find({});
        return res.render('Home',{
            title:"Contact List",
            Contacts:contacts
        })
    }catch(err){
        console.log(err);   
    }
})

app.post('/create-contact', (req, res) => {
    Contact_User.create({
        name: req.body.name,
        phone: req.body.phone
    })
    return res.redirect('back');
})

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error Server Connecting");
    }
    console.log("Server Connected Port", PORT);
})