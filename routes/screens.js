var express = require('express');
var router = express.Router();
var Screen = require('../data/models/screens');
var Response = require('../utils/response');

//POST a new screen to the database with a name. State is automatically set to 'up'. 
router.post('/', Response.restrict, function(req, res) {
    var name = req.body.name;
    var state = 'up';
    
    if (typeof name === "object") {
		name = JSON.stringify(name);
	}
    
    var newScreen = new Screen({
        name: name,  
        state: state
    });
    
    newScreen.save(function(err, screen) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                screen: screen
            });
        }
    });
});

//GET all of the screens
router.get('/', Response.restrict, function(req, res) {
    Screen.find({}, function(err, screens) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                screens: screens
            });
        }
    });
});

//GET all of the screens that are 'up'. 
router.get('/up', Response.restrict, function(req, res) {
    Screen.find({
        state: 'up'
    }, function(err, screens) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                screens: screens
            });
        }
    });
});

//GET all of the screens that are 'down'. 
router.get('/down', Response.restrict, function(req, res) {
    Screen.find({
        state: 'down'
    }, function(err, screens) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                screens: screens
            });
        }
    });
});

//GET a screen by Id
router.get('/:screenId', Response.restrict, function(req, res) {
    var screenId = req.params.screenId;
    Screen.findOne({
        _id: screenId
    }, function(err, screen) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                screen: screen
            });
        }
    });
});

//DELETE a screen given an Id
router.delete('/:screenId', Response.restrict, function(req, res) {
    var screenId = req.params.screenId;
    Screen.remove({
        _id: screenId
    }, function(err, doc) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {data: null});
		}
    });
});

//PUT a screen's state (toggle state)
router.put('/:screenId/state', Response.restrict, function(req, res) {
    var screenId = req.params.screenId;
    
    var updateScreen = function(state) {
        Screen.findOneAndUpdate({
            _id: screenId
        }, {
            $set: {
                "state": state
            }
        }, function(err, screen) {
            if (err) {
                Response.sendErr(res, 500, 'An unknown error occurred.');
            }
            if (!screen) {
                Response.sendErr(res, 404, 'Screen not found');
            } else {
                Response.sendSuccess(res, {
                    screen: screen
                });
            }
        });
    }
    
    Screen.findOne({
        _id: screenId
    }, function(err, screen) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            if (screen.state === "up") {
                var state = "down";
                updateScreen(state);
            } else {
                var state = "up";
                updateScreen(state);
            }
        }
    });
});

//PUT a screen's name
router.put('/:screenId/name', Response.restrict, function(req, res) {
    var name = req.body.name;
    
    if (typeof name === "object") {
		name = JSON.stringify(name);
	}
    
    var screenId = req.params.screenId;
    Screen.findOneAndUpdate({
        _id: screenId
    }, {
        $set: {
            "name": name
        }
    }, function(err, screen) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        }
        if (!screen) {
            Response.sendErr(res, 404, 'Screen not found');
        } else {
            Response.sendSuccess(res, {
                screen: screen
            });
        }
    });
});

module.exports = router;