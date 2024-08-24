const mongoose = require('mongoose');
//schema
const userSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    age:{
        type:String,
    },
});

//create model to perform crud operation
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;