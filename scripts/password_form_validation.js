$(document).ready(function() {

  $('#password_form').validate({
    rules: {
      email: {
        required: true
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 12,
        password_uppercase: true,
        password_number: true
      },
      confirm_password: {
        required: true,
        equalTo: '#password'
      }
    },
    messages: {
      email: {
        required: validation_phrases.required,
      },
      password: {
        required: validation_phrases.required,
        minlength: validation_phrases.password_minlength_6,
        maxlength: validation_phrases.password_maxlength_12,
      },
      confirm_password: {
        required: validation_phrases.required,
        equalTo: validation_phrases.password_equalTo
      }
    },
    submitHandler: function(form) {
      if (registerPasswordForm($('#email').val(), $('#password').val())) {
        $('#password_form').hide();
        $('#ty-for-registration').removeClass('hidden');
      } else {
        $('#server_password_error').text(validation_phrases.email_error);
      }
    }
  });
});
