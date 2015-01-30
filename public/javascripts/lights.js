//Loads dashboard with all lights displayed on table
$(document).on('click', '#view-all-lights', function (evt) {
    loadLightsPageAllLights();
});

//Loads dashboard with 'on' lights displayed on table
$(document).on('click', '#on-lights', function(evt) {
    loadLightsPageOnLights();
});

//Loads dashboard with 'off' lights displayed on table
$(document).on('click', '#off-lights', function(evt) {
    loadLightsPageOffLights();
});

//Changes state of specified light to 'on' in the database
$(document).on('click', '#turn-light-on', function(evt) {
    var lightId = $(this).attr('data-light-id');
    var url = '/lights/' + lightId + '/state';
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('lights', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'PUT'
    }).done(function(response) {
        loadLightsPageAllLights();
    }).fail(failCallback);
});

//Changes state of specified light to 'off' in the database
$(document).on('click', '#turn-light-off', function(evt) {
    var lightId = $(this).attr('data-light-id');
    var url = '/lights/' + lightId + '/state';
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('lights', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'PUT'
    }).done(function(response) {
        loadLightsPageAllLights();
    }).fail(failCallback);
});

//Delete a specific light
$(document).on('click', '#delete-light', function(evt) {
    var lightId = $(this).attr('data-light-id');
    var url = '/lights/' + lightId;
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('lights', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        type: 'DELETE'
    }).done(function(response) {
        loadLightsPageAllLights();
    }).fail(failCallback);
});

//Open modal to create a new light
$(document).on('click', '#create-new-light', function(evt) {
    evt.preventDefault();
    $('#modal-create-light').modal('show');
});

//Submit new light modal
$(document).on('submit', '#create-light-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var lightName = formData.lightName;
    var lightColor = formData.lightColor;
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('lights', {
            error: response.err
        });
    };
    
    $.post('/lights', {
        name: lightName,
        color: lightColor
    }).done(function(response) {
        loadLightsPageAllLights();
    }).fail(failCallback);
});

//Open modal to edit light name
$(document).on('click', '#open-modal-edit-light', function(evt) {
    evt.preventDefault();
    var lightId = $(this).attr('data-light-id');
    $('#edit-light-form-id').attr('value', lightId);
    $('#modal-edit-light').modal('show');
});

//Submit edit item modal
$(document).on('submit', '#edit-light-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var lightId = formData.lightId;
    var newLightName = formData.lightName;
    var url = '/lights/' + lightId + '/name'
    
    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('lights', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        data: {
            'name': newLightName
        },
        type: 'PUT'
    }).done(function(response) {
        $('#' + formData.lightId).remove();
        loadLightsPageAllLights();
    }).fail(failCallback);
});

//Open modal to edit the color of a light
$(document).on('click', '#open-modal-edit-color', function(evt) {
    var lightId = $(this).attr('data-light-id');
    $('#edit-light-color-form-id').attr('value', lightId);
    $('#modal-edit-light-color').modal('show');
});

//Control color-picker box in modal
$(document).on('click', '#picker', function(evt) {
    $('#picker').colpick({
        layout:'hex',
        submit:0,
        colorScheme:'dark',
        onChange:function(hsb,hex,rgb,el,bySetColor) {
            $(el).css('border-color','#'+hex);
            // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
            if(!bySetColor) $(el).val(hex);
        }
    }).keyup(function(){
        $(this).colpickSetColor(this.value);
    });
});

//Submit edit color modal
$(document).on('submit', '#edit-light-color-form', function(evt) {
    evt.preventDefault();
    var formData = helpers.getFormData(this);
    var lightId = formData.lightId
    var newLightColor = formData.lightColor; 
    var newLightColor = '#' + newLightColor;
    var url = '/lights/' + lightId + '/color';

    var failCallback = function (jqxhr) {
        var response = $.parseJSON(jqxhr.responseText);
        loadPage('lights', {
            error: response.err
        });
    };
    
    $.ajax({
        url: url,
        data: {
            'color': newLightColor
        },
        type: 'PUT'
    }).done(function(response) {
        $('#' + formData.lightId).remove();
        loadLightsPageAllLights();
    }).fail(failCallback);
});