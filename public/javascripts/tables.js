//Loads dashboard with all tables displayed on table
$(document).on('click', '#view-all-tables', function (evt) {
    loadTablesPageAllTables();
});

//Loads dashboard with 'open' tables displayed on table
$(document).on('click', '#open-tables', function(evt) {
    loadTablesPageOpenTables();
});

//Loads dashboard with 'closed' tables displayed on table
$(document).on('click', '#closed-tables', function(evt) {
    loadTablesPageClosedTables();
});

//Changes state of specified table to 'open' in the database
$(document).on('click', '#open-table', function(evt) {
    var tableId = $(this).attr('data-table-id');
    var url = '/tables/' + tableId + '/state';
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('tables', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'PUT'
    }).done(function(response) {
        loadTablesPageAllTables();
    }).fail(failCallback);
});

//Changes state of specified table to 'closed' in the database
$(document).on('click', '#close-table', function(evt) {
    var tableId = $(this).attr('data-table-id');
    var url = '/tables/' + tableId + '/state';
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('tables', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'PUT'
    }).done(function(response) {
        loadTablesPageAllTables();
    }).fail(failCallback);
});

//Delete a specific table
$(document).on('click', '#delete-table', function(evt) {
    var tableId = $(this).attr('data-table-id');
    var url = '/tables/' + tableId;
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('tables', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'DELETE'
    }).done(function(response) {
        loadTablesPageAllTables();
    }).fail(failCallback);
});

//Open modal to create a new table
$(document).on('click', '#create-new-table', function(evt) {
    evt.preventDefault();
    $('#modal-create-table').modal('show');
});

//Submit new table modal
$(document).on('submit', '#create-table-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var tableName = formData.tableName;
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('tables', {
            error: response.err
        });
    };
    
    $.post('/tables', {
        name: tableName,
    }).done(function(response) {
        loadTablesPageAllTables();
    }).fail(failCallback);
});

//Open modal to edit table name
$(document).on('click', '#open-modal-edit-table', function(evt) {
    evt.preventDefault();
    var tableId = $(this).attr('data-table-id');
    $('#edit-table-form-id').attr('value', tableId);
    $('#modal-edit-table').modal('show');
});

//Submit edit item modal
$(document).on('submit', '#edit-table-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var tableId = formData.tableId;
    var newTableName = formData.tableName;
    var url = '/tables/' + tableId + '/name'
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('tables', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        data: {
            'name': newTableName
        },
        type: 'PUT'
    }).done(function(response) {
        $('#' + formData.tableId).remove();
        loadTablesPageAllTables();
    }).fail(failCallback);
});