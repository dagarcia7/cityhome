var mongoose = require('mongoose');
var objectSchema = require('../schemas/objects');

/*
Defining the Closet Model to be used in the app. This model will use the Object Schema.
*/

var Closet = mongoose.model('Closet', objectSchema);
module.exports = Closet;