var mongoose = require('mongoose');
var objectSchema = require('../schemas/objects');

/*
Defining the Screen Model to be used in the app. This model will use the Object Schema.
*/

var Screen = mongoose.model('Screen', objectSchema);
module.exports = Screen;