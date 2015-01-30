//Loads dashboard with all screens displayed on table
$(document).on('click', '#view-all-screens', function (evt) {
    loadScreensPageAllScreens();
});

//Loads dashboard with 'raised' screens displayed on table
$(document).on('click', '#raised-screens', function(evt) {
    loadScreensPageRaisedScreens();
});

//Loads dashboard with 'lowered' screens displayed on table
$(document).on('click', '#lowered-screens', function(evt) {
    loadScreensPageLoweredScreens();
});

//Changes state of specified screen to 'up' in the database
$(document).on('click', '#raise-screen', function(evt) {
    var screenId = $(this).attr('data-screen-id');
    var url = '/screens/' + screenId + '/state';
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('screens', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'PUT'
    }).done(function(response) {
        loadScreensPageAllScreens();
    }).fail(failCallback);
});

//Changes state of specified screen to 'down' in the database
$(document).on('click', '#lower-screen', function(evt) {
    var screenId = $(this).attr('data-screen-id');
    var url = '/screens/' + screenId + '/state';
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('screens', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'PUT'
    }).done(function(response) {
        loadScreensPageAllScreens();
    }).fail(failCallback);
});

//Delete a specific screen
$(document).on('click', '#delete-screen', function(evt) {
    var screenId = $(this).attr('data-screen-id');
    var url = '/screens/' + screenId;
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('screens', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'DELETE'
    }).done(function(response) {
        loadScreensPageAllScreens();
    }).fail(failCallback);
});

//Open modal to create a new screen
$(document).on('click', '#create-new-screen', function(evt) {
    evt.preventDefault();
    $('#modal-create-screen').modal('show');
});

//Submit new screen modal
$(document).on('submit', '#create-screen-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var screenName = formData.screenName;
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('screens', {
            error: response.err
        });
    };
    
    $.post('/screens', {
        name: screenName,
    }).done(function(response) {
        loadScreensPageAllScreens();
    }).fail(failCallback);
});

//Open modal to edit screen name
$(document).on('click', '#open-modal-edit-screen', function(evt) {
    evt.preventDefault();
    var screenId = $(this).attr('data-screen-id');
    $('#edit-screen-form-id').attr('value', screenId);
    $('#modal-edit-screen').modal('show');
});

//Submit edit item modal
$(document).on('submit', '#edit-screen-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var screenId = formData.screenId;
    var newScreenName = formData.screenName;
    var url = '/screens/' + screenId + '/name'
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('screens', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        data: {
            'name': newScreenName
        },
        type: 'PUT'
    }).done(function(response) {
        $('#' + formData.screenId).remove();
        loadScreensPageAllScreens();
    }).fail(failCallback);
});