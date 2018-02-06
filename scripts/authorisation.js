$(document).ready(function() {

  $('#sign_up').click(function() {
    $('.welcome-window').hide();
    $('.sign-up-form').removeClass('hidden');
  });

  $('#sign_up_after_registration').click(function() {
    $('.registration-form').hide();
    $('.sign-up-form').removeClass('hidden');
  });

  $('#sign_up_continue').click(function() {
    if (authorize($('#user_name_sign_up').val(), $('#password_sign_up').val())) {
      if (addToOnline($('#user_name_sign_up').val())) {
        $('.sign-up-form').hide();
      } else {
        $('#sign_up_error').empty();
        $('#sign_up_error').text(validation_phrases.online_user);
      }
    } else {
      $('#sign_up_error').empty();
      $('#sign_up_error').text(validation_phrases.sign_up_error);
    };
  });
});

function authorize(user_name, password) {
  var db = this.fromJSON(localStorage.users);
  for (key in db) {
    if (db[key].user_name == user_name) {
      if (db[key].password == password) {
        return true
      };
    }
  }
};
