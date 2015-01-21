var express = require('express');
var router = express.Router();
var Closet = require('../data/models/closets');
var Response = require('../utils/response');

//POST a new closet to the database with a name. State is automatically set to 'closed'. 
router.post('/', Response.restrict, function(req, res) {
    var name = req.body.name;
    var state = 'closed';
    
    if (typeof name === "object") {
		name = JSON.stringify(name);
	}
    
    var newCloset = new Closet({
        name: name,  
        state: state
    });
    
    newCloset.save(function(err, closet) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                closet: closet
            });
        }
    });
});

//GET all of the closets
router.get('/', Response.restrict, function(req, res) {
    Closet.find({}, function(err, closets) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                closets: closets
            });
        }
    });
});

//GET all of the closets that are 'closed'. 
router.get('/closed', Response.restrict, function(req, res) {
    Closet.find({
        state: 'closed'
    }, function(err, closets) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                closets: closets
            });
        }
    });
});

//GET all of the closets that are 'open'. 
router.get('/open', Response.restrict, function(req, res) {
    Closet.find({
        state: 'open'
    }, function(err, closets) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                closets: closets
            });
        }
    });
});

//GET a closet by Id
router.get('/:closetId', Response.restrict, function(req, res) {
    var closetId = req.params.closetId;
    Closet.findOne({
        _id: closetId
    }, function(err, closet) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                closet: closet
            });
        }
    });
});

//DELETE a closet given an Id
router.delete('/:closetId', Response.restrict, function(req, res) {
    var closetId = req.params.closetId;
    Closet.remove({
        _id: closetId
    }, function(err, doc) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {data: null});
		}
    });
});

//PUT a closet's state (toggle state)
router.put('/:closetId/state', Response.restrict, function(req, res) {
    var tableId = req.params.closetId;
    
    var updateCloset = function(state) {
        Closet.findOneAndUpdate({
            _id: closetId
        }, {
            $set: {
                "state": state
            }
        }, function(err, closet) {
            if (err) {
                Response.sendErr(res, 500, 'An unknown error occurred.');
            }
            if (!closet) {
                Response.sendErr(res, 404, 'Closet not found');
            } else {
                Response.sendSuccess(res, {
                    closet: closet
                });
            }
        });
    }
    
    Closet.findOne({
        _id: closetId
    }, function(err, closet) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            if (closet.state === "closed") {
                var state = "open";
                updateCloset(state);
            } else {
                var state = "closed";
                updateCloset(state);
            }
        }
    });
});

//PUT an closet's name
router.put('/:closetId/name', Response.restrict, function(req, res) {
    var name = req.body.name;
    
    if (typeof name === "object") {
		name = JSON.stringify(name);
	}
    
    var closetId = req.params.closetId;
    Closet.findOneAndUpdate({
        _id: closetId
    }, {
        $set: {
            "name": name
        }
    }, function(err, closet) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        }
        if (!closet) {
            Response.sendErr(res, 404, 'Closet not found');
        } else {
            Response.sendSuccess(res, {
                closet: closet
            });
        }
    });
});

module.exports = router;