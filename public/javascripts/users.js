$(document).on('submit', '#login-form', function(evt) {
  evt.preventDefault();
  $.post(
    '/users/login',
    helpers.getFormData(this)
  ).done(function(response) {
    currentUser = response.response.user;
    loadHomePage();
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
    loadPage('login', {error: response.response});
  });
});

$(document).on('click', '#logout-link', function(evt) {
  evt.preventDefault();
  $.post(
    '/users/logout'
  ).done(function(response) {
    currentUser = undefined;
    loadHomePage();
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
    loadDashboard({error: response.response});
  });
});