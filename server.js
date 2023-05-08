var express = require('express');
var app = express();
const mongoose = require('mongoose');




//Database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})




app.listen(3001, function () {
    console.log('Listening to Port 3001');
});