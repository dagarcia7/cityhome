var mongoose = require('mongoose');
var objectSchema = require('../schemas/objects');

/*
Defining the Bed Model to be used in the app. This model will use the Object Schema.
*/

var Bed = mongoose.model('Bed', objectSchema);
module.exports = Bed;