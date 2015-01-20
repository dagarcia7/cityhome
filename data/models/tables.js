var mongoose = require('mongoose');
var objectSchema = require('../schemas/objects');

/*
Defining the Table Model to be used in the app. This model will use the Object Schema.
*/

var Table = mongoose.model('Table', objectSchema);
module.exports = Table;