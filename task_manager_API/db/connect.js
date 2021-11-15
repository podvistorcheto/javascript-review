const mongoose = require('mongoose');

const connectDB = function(url) {
    return mongoose.connect(url, {
        useNewUrlParser: true, 
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,    
    })
}

module.exports = connectDB;

// .then(function(){
//     console.log('connected to the DB....')
// }).catch(function(error){
//     console.log(error);
// }); 