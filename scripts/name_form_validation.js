$(document).ready(function() {

  $('#registration').click(function() {
    $('.welcome-window').hide();
    $('.registration-form').removeClass('hidden');
  });

  $('#name_form').validate({
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
      if (registerNameForm($('#user_name').val(), $('#first_name').val(), $('#last_name').val())) {
        $('#name_form').hide();
        $('#password_form').removeClass('hidden');
      } else {
        $('#server_user_name_error').text(validation_phrases.user_name_error);
      }
    }
  });
});
