var express = require('express');
var router = express.Router();
var Bed = require('../data/models/beds');
var Response = require('../utils/response');

//POST a new bed to the database with a name. State is automatically set to 'up'. 
router.post('/', Response.restrict, function(req, res) {
    var name = req.body.name;
    var state = 'up';
    
    if (typeof name === "object") {
		name = JSON.stringify(name);
	}
    
    var newBed = new Bed({
        name: name,  
        state: state
    });
    
    newBed.save(function(err, bed) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                bed: bed
            });
        }
    });
});

//GET all of the beds
router.get('/', Response.restrict, function(req, res) {
    Bed.find({}, function(err, beds) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                beds: beds
            });
        }
    });
});

//GET all of the beds that are 'up'. 
router.get('/up', Response.restrict, function(req, res) {
    Bed.find({
        state: 'up'
    }, function(err, beds) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                beds: beds
            });
        }
    });
});

//GET all of the beds that are 'down'. 
router.get('/down', Response.restrict, function(req, res) {
    Bed.find({
        state: 'down'
    }, function(err, beds) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                beds: beds
            });
        }
    });
});

//GET a bed by Id
router.get('/:bedId', Response.restrict, function(req, res) {
    var bedId = req.params.bedId;
    Bed.findOne({
        _id: bedId
    }, function(err, bed) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                bed: bed
            });
        }
    });
});

//DELETE a bed given an Id
router.delete('/:bedId', Response.restrict, function(req, res) {
    var bedId = req.params.bedId;
    Bed.remove({
        _id: bedId
    }, function(err, doc) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {data: null});
		}
    });
});

//PUT a bed's state (toggle state)
router.put('/:bedId/state', Response.restrict, function(req, res) {
    var bedId = req.params.bedId;
    
    var updateBed = function(state){
        Bed.findOneAndUpdate({
            _id: bedId
        }, {
            $set: {
                "state": state
            }
        }, function(err, bed) {
            if (err) {
                Response.sendErr(res, 500, 'An unknown error occurred.');
            }
            if (!bed) {
                Response.sendErr(res, 404, 'Bed not found');
            } else {
                Response.sendSuccess(res, {
                    bed: bed
                });
            }
        });
    }
    
    Bed.findOne({
        _id: bedId
    }, function(err, bed) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            if (bed.state === "up") {
                var state = "down";
                updateBed(state);
            } else {
                var state = "up";
                updateBed(state);
            }
        }
    });
});

//PUT a bed's name
router.put('/:bedId/name', Response.restrict, function(req, res) {
    var name = req.body.name;
    
    if (typeof name === "object") {
		name = JSON.stringify(name);
	}
    
    var bedId = req.params.bedId;
    Bed.findOneAndUpdate({
        _id: bedId
    }, {
        $set: {
            "name": name
        }
    }, function(err, bed) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        }
        if (!bed) {
            Response.sendErr(res, 404, 'Bed not found');
        } else {
            Response.sendSuccess(res, {
                bed: bed
            });
        }
    });
});

module.exports = router;