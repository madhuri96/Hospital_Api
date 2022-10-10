const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://madhuribansode12:root@cluster0.asf8j5h.mongodb.net/Hospital_Api?retryWrites=true&w=majority',{useNewUrlParser: true});  //mongodb://localhost/HospitalAPI

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;