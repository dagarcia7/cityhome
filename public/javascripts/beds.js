//Loads dashboard with all beds displayed on table
$(document).on('click', '#view-all-beds', function (evt) {
    loadBedsPageAllBeds();
});

//Loads dashboard with 'raised' beds displayed on table
$(document).on('click', '#raised-beds', function(evt) {
    loadBedsPageRaisedBeds();
});

//Loads dashboard with 'lowered' beds displayed on table
$(document).on('click', '#lowered-beds', function(evt) {
    loadBedsPageLoweredBeds();
});

//Changes state of specified bed to 'up' in the database
$(document).on('click', '#raise-bed', function(evt) {
    var bedId = $(this).attr('data-bed-id');
    var url = '/beds/' + bedId + '/state';
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('beds', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'PUT'
    }).done(function(response) {
        loadBedsPageAllBeds();
    }).fail(failCallback);
});

//Changes state of specified bed to 'down' in the database
$(document).on('click', '#lower-bed', function(evt) {
    var bedId = $(this).attr('data-bed-id');
    var url = '/beds/' + bedId + '/state';
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('beds', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'PUT'
    }).done(function(response) {
        loadBedsPageAllBeds();
    }).fail(failCallback);
});

//Delete a specific bed
$(document).on('click', '#delete-bed', function(evt) {
    var bedId = $(this).attr('data-bed-id');
    var url = '/beds/' + bedId;
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('beds', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'DELETE'
    }).done(function(response) {
        loadBedsPageAllBeds();
    }).fail(failCallback);
});

//Open modal to create a new bed
$(document).on('click', '#create-new-bed', function(evt) {
    evt.preventDefault();
    $('#modal-create-bed').modal('show');
});

//Submit new bed modal
$(document).on('submit', '#create-bed-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var bedName = formData.bedName;
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('beds', {
            error: response.err
        });
    };
    
    $.post('/beds', {
        name: bedName,
    }).done(function(response) {
        loadBedsPageAllBeds();
    }).fail(failCallback);
});

//Open modal to edit bed name
$(document).on('click', '#open-modal-edit-bed', function(evt) {
    evt.preventDefault();
    var bedId = $(this).attr('data-bed-id');
    $('#edit-bed-form-id').attr('value', bedId);
    $('#modal-edit-bed').modal('show');
});

//Submit edit item modal
$(document).on('submit', '#edit-bed-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var bedId = formData.bedId;
    var newBedName = formData.bedName;
    var url = '/beds/' + bedId + '/name'
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('beds', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        data: {
            'name': newBedName
        },
        type: 'PUT'
    }).done(function(response) {
        $('#' + formData.bedId).remove();
        loadBedsPageAllBeds();
    }).fail(failCallback);
});