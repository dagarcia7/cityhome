var mongoose = require('mongoose');

var lightSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    state: {
        type: String, 
        required: true
    }, 
    color: {
        type: String, 
        required: true
    } 
});

module.exports = lightSchema;