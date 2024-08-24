const mongoose = require('mongoose');

async function connectMongoDB(){
    //connect with MOngodb
    mongoose.connect('mongodb://127.0.0.1:27017/mern')
    .then(()=> console.log('MongoDB Connected'))
    .catch(err=> console.log('Mongo Error', err));
}
module.exports = {
    connectMongoDB,
};