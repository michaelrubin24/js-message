$(document).ready(function() {

  $('#sign_up_android').click(function() {
    $('#welcome_window_android').hide();
    $('#sign_up_form_android').removeClass('hidden');
  });

  $('#sign_up_after_registration_android').click(function() {
    $('#registration_form_android').hide();
    $('#sign_up_form_android').removeClass('hidden');
  });

  $('#sign_up_continue_android').click(function() {
    if (authorize($('#user_name_sign_up_android').val(), $('#password_sign_up_android').val())) {
      if (addToOnline($('#user_name_sign_up_android').val())) {
        $('#sign_up_form_android').hide();
        $('#android-messages').removeClass('hidden');
        $('#android_input_message').removeClass('hidden');
        $('#android_keyboard').removeClass('hidden');
      } else {
        $('#sign_up_error_android').empty();
        $('#sign_up_error_android').text(validation_phrases.online_user);
      };
    } else {
      $('#sign_up_error_android').text(validation_phrases.sign_up_error);
    };
  });

  $('#registration_android').click(function() {
    $('#welcome_window_android').hide();
    $('#registration_form_android').removeClass('hidden');
  });

  $('#name_form_android').validate({
    rules: {
      user_name: {
        required: true,
        minlength: 4,
      },
      first_name: {
        required: true,
        minlength: 2,
        first_letter: true,
        check_for_number: true,
        check_for_symbols: true,
        check_for_space: true
      },
      last_name: {
        required: true,
        minlength: 2,
        first_letter: true,
        check_for_number: true,
        check_for_symbols: true,
        check_for_space: true
      }
    },
    messages: {
      user_name: {
        required: validation_phrases.required,
        minlength: validation_phrases.minlength_4
      },
      first_name: {
        required: validation_phrases.required,
        minlength: validation_phrases.minlength_2
      },
      last_name: {
        required: validation_phrases.required,
        minlength: validation_phrases.minlength_2
      }
    },
    submitHandler: function(form) {
      if (registerNameForm($('#user_name_android').val(), $('#first_name_android').val(), $('#last_name_android').val())) {
        $('#name_form_android').hide();
        $('#password_form_android').removeClass('hidden');
      } else {
        $('#server_user_name_error_android').text(validation_phrases.user_name_error);
      }
    }
  });

  $('#password_form_android').validate({
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
        equalTo: '#password_android'
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
      if (registerPasswordForm($('#email_android').val(), $('#password_android').val())) {
        $('#password_form_android').hide();
        $('#ty-for-registration_android').removeClass('hidden');
      } else {
        $('#server_password_error_android').text(validation_phrases.email_error);
      }
    }
  });
});
