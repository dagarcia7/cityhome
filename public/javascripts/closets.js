//Loads dashboard with all closets displayed on table
$(document).on('click', '#view-all-closets', function (evt) {
    loadClosetsPageAllClosets();
});

//Loads dashboard with 'open' closets displayed on table
$(document).on('click', '#open-closets', function(evt) {
    loadClosetsPageOpenClosets();
});

//Loads dashboard with 'closed' closets displayed on table
$(document).on('click', '#closed-closets', function(evt) {
    loadClosetsPageClosedClosets();
});

//Changes state of specified closet to 'open' in the database
$(document).on('click', '#open-closet', function(evt) {
    var closetId = $(this).attr('data-closet-id');
    var url = '/closets/' + closetId + '/state';
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('closets', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'PUT'
    }).done(function(response) {
        loadClosetsPageAllClosets();
    }).fail(failCallback);
});

//Changes state of specified closet to 'closed' in the database
$(document).on('click', '#close-closet', function(evt) {
    var closetId = $(this).attr('data-closet-id');
    var url = '/closets/' + closetId + '/state';
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('closets', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'PUT'
    }).done(function(response) {
        loadClosetsPageAllClosets();
    }).fail(failCallback);
});

//Delete a specific closet
$(document).on('click', '#delete-closet', function(evt) {
    var closetId = $(this).attr('data-closet-id');
    var url = '/closets/' + closetId;
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('closets', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'DELETE'
    }).done(function(response) {
        loadClosetsPageAllClosets();
    }).fail(failCallback);
});

//Open modal to create a new closet
$(document).on('click', '#create-new-closet', function(evt) {
    evt.preventDefault();
    $('#modal-create-closet').modal('show');
});

//Submit new closet modal
$(document).on('submit', '#create-closet-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var closetName = formData.closetName;
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('closets', {
            error: response.err
        });
    };
    
    $.post('/closets', {
        name: closetName,
    }).done(function(response) {
        loadClosetsPageAllClosets();
    }).fail(failCallback);
});

//Open modal to edit closet name
$(document).on('click', '#open-modal-edit-closet', function(evt) {
    evt.preventDefault();
    var closetId = $(this).attr('data-closet-id');
    $('#edit-closet-form-id').attr('value', closetId);
    $('#modal-edit-closet').modal('show');
});

//Submit edit item modal
$(document).on('submit', '#edit-closet-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var closetId = formData.closetId;
    var newClosetName = formData.closetName;
    var url = '/closets/' + closetId + '/name'
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('closets', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        data: {
            'name': newClosetName
        },
        type: 'PUT'
    }).done(function(response) {
        $('#' + formData.closetId).remove();
        loadClosetsPageAllClosets();
    }).fail(failCallback);
});