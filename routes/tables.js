var express = require('express');
var router = express.Router();
var Table = require('../data/models/tables');
var Response = require('../utils/response');

//POST a new table to the database with a name. State is automatically set to 'closed'. 
router.post('/', Response.restrict, function(req, res) {
    var name = req.body.name;
    var state = 'closed';
    
    if (typeof name === "object") {
		name = JSON.stringify(name);
	}
    
    var newTable = new Table({
        name: name,  
        state: state
    });
    
    newTable.save(function(err, table) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                table: table
            });
        }
    });
});

//GET all of the tables
router.get('/', Response.restrict, function(req, res) {
    Table.find({}, function(err, tables) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                tables: tables
            });
        }
    });
});

//GET all of the tables that are 'closed'. 
router.get('/closed', Response.restrict, function(req, res) {
    Table.find({
        state: 'closed'
    }, function(err, tables) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                tables: tables
            });
        }
    });
});

//GET all of the tables that are 'open'. 
router.get('/open', Response.restrict, function(req, res) {
    Table.find({
        state: 'open'
    }, function(err, tables) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                tables: tables
            });
        }
    });
});

//GET a table by Id
router.get('/:tableId', Response.restrict, function(req, res) {
    var tableId = req.params.tableId;
    Table.findOne({
        _id: tableId
    }, function(err, table) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {
                table: table
            });
        }
    });
});

//DELETE a table given an Id
router.delete('/:tableId', Response.restrict, function(req, res) {
    var tableId = req.params.tableId;
    Table.remove({
        _id: tableId
    }, function(err, doc) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            Response.sendSuccess(res, {data: null});
		}
    });
});

//PUT a table's state (toggle state)
router.put('/:tableId/state', Response.restrict, function(req, res) {
    var state = "";
    var tableId = req.params.tableId;
    
    Table.findOne({
        _id: tableId
    }, function(err, table) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        } else {
            if (table.state === "closed") {
                state = "open";
            } else {
                state = "closed";
            }
        }
    });
    
    Table.findOneAndUpdate({
        _id: tableId
    }, {
        $set: {
            "state": state
        }
    }, function(err, table) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        }
        if (!table) {
            Response.sendErr(res, 404, 'Table not found');
        } else {
            Response.sendSuccess(res, {
                table: table
            });
        }
    });
});

//PUT an table's name
router.put('/:tableId/name', Response.restrict, function(req, res) {
    var name = req.body.name;
    
    if (typeof name === "object") {
		name = JSON.stringify(name);
	}
    
    var tableId = req.params.tableId;
    Table.findOneAndUpdate({
        _id: tableId
    }, {
        $set: {
            "name": name
        }
    }, function(err, table) {
        if (err) {
            Response.sendErr(res, 500, 'An unknown error occurred.');
        }
        if (!table) {
            Response.sendErr(res, 404, 'Table not found');
        } else {
            Response.sendSuccess(res, {
                table: table
            });
        }
    });
});

module.exports = router;