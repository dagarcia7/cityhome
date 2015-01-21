var express = require('express');
var router = express.Router();
var Light = require('../data/models/lights');
var Response = require('../utils/response');

//POST a new light to the database with a name and color. State is automatically set to 'off'
router.post('/', Response.restrict, function(req, res) {
    var name = req.body.name;
    var color = req.body.color;
    var state = 'off';
    
    if (typeof name === "object") {
		name = JSON.stringify(name);
	}
    
    if (typeof color === "object") {
		color = JSON.stringify(color);
	}
    
    var newLight = new Light({
        name: name, 
        color: color, 
        state: state
    });
    
    newLight.save(function(err, light) {
        if (err) {
            return Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            return Response.sendSuccess(res, {
                light: light
            });
        }
    });
});

//GET all of the lights
router.get('/', Response.restrict, function(req, res) {
    Light.find({}, function(err, lights) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                lights: lights
            });
        }
    });
});

//GET all of the lights that are 'on'. 
router.get('/on', Response.restrict, function(req, res) {
    Light.find({
        state: 'on'
    }, function(err, lights) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                lights: lights
            });
        }
    });
});

//GET all of the lights that are 'off'. 
router.get('/off', Response.restrict, function(req, res) {
    Light.find({
        state: 'off'
    }, function(err, lights) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                lights: lights
            });
        }
    });
});

//GET a light by Id
router.get('/:lightId', Response.restrict, function(req, res) {
    var lightId = req.params.lightId;
    Light.findOne({
        _id: lightId
    }, function(err, light) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                light: light
            });
        }
    });
});

//DELETE a light given an Id
router.delete('/:lightId', Response.restrict, function(req, res) {
    var lightId = req.params.lightId;
    Light.remove({
        _id: lightId
    }, function(err, doc) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {data: null});
		}
    });
});

//PUT a light's state (toggle state)
router.put('/:lightId/state', Response.restrict, function(req, res) {
    var lightId = req.params.lightId;
    
    var updateLight = function(state) {
        Light.findOneAndUpdate({
            _id: lightId
        }, {
            $set: {
                "state": state
            }
        }, function(err, light) {
            if (err) {
                Response.sendErr(res, 500, 'An unknown error occurred.');
            }
            if (!light) {
                Response.sendErr(res, 404, 'Light not found');
            } else {
                Response.sendSuccess(res, {
                    light: light
                });
            }
        });
    }
    
    Light.findOne({
        _id: lightId
    }, function(err, light) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            if (light.state === "off") {
                var state = "on";
                updateLight(state);
                
            } else {
                var state = "off";
                updateLight(state);
            }
        }
    }); 
});
     
//PUT an light's color
router.put('/:lightId/color', Response.restrict, function(req, res) {
    var color = req.body.color;
    
    if (typeof color === "object") {
		color = JSON.stringify(color);
	}
    
    var lightId = req.params.lightId;
    Light.findOneAndUpdate({
        _id: lightId
    }, {
        $set: {
            "color": color
        }
    }, function(err, light) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        }
        if (!light) {
            Response.sendErr(res, 404, 'Light not found');
        } else {
            Response.sendSuccess(res, {
                light: light
            });
        }
    });
});

//PUT an light's name
router.put('/:lightId/name', Response.restrict, function(req, res) {
    var name = req.body.name;
    
    if (typeof name === "object") {
		name = JSON.stringify(name);
	}
    
    var lightId = req.params.lightId;
    Light.findOneAndUpdate({
        _id: lightId
    }, {
        $set: {
            "name": name
        }
    }, function(err, light) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        }
        if (!light) {
            Response.sendErr(res, 404, 'Light not found');
        } else {
            Response.sendSuccess(res, {
                light: light
            });
        }
    });
});

module.exports = router;