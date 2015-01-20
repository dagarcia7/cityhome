var mongoose = require('mongoose'); 
var lightSchema = require('../schemas/lights');

/*
* Defining the Light Model to be used in the app. This model will use the corresponding Schema.
*/

var Light = mongoose.model('Light', lightSchema);
module.exports = Light; 