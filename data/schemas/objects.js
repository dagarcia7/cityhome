var mongoose = require('mongoose');

/*
* Defining the Object Schema.
* This Schema will define how the Object collection will be organized.
*/

var objectSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    }, 
    state: {
        type: String, 
        required: true
    }
});

module.exports = objectSchema;