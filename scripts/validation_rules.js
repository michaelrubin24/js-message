$(document).ready(function() {
  $('#name_form').validate({
    rules: {
      user_name: {
        required: true,
        minlength: 2,
      },
      first_name: {
        required: true,
        minlength: 2
      },
      second_name: {
        required: true,
        minlength: 2
      }
    },
    message: {
      user_name: {
        required: 'Поле обязательное для заполнения',
        minlength: 'Минимальная длина имя 2 символов'
      },
      first_name: {
        required: 'Поле обязательное для заполнения',
        minlength: 'Минимальная длина имя 2 символов'
      },
      second_name: {
        required: 'Поле обязательное для заполнения',
        minlength: 'Минимальная длина имя 2 символов'
      }
    }
  });
  $('#password_form').validate({
    rules: {
      email: {
        required: true
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 12,
      },
      confirm_password: {
        required: true,
        equalTo: '#password'
      }
    },
    messages: {
      email: {
        required: 'Поле обязательное для заполнения',
      },
      password: {
        required: 'Поле обязательное для заполнения',
        minlength: 'Минимальная длина пароля 6 символов',
        maxlength: 'Максимальная длина пароля 12 символов',
      },
      confirm_password: {
        required: 'Поле обязательное для заполнения',
        equalTo: 'Пароль не соответсвует введенному'
      }
    }
  });
  $('#first_name').keypress(function() {
    if (!firstUpperCaseLetter($('#first_name').val())) {
      showError($('#first_name'), 'Имя должно начинаться с большой буквы.');
    } else {
      $('span.error').empty();
    }
  });

  function showError(parent_element, error_text) {
    if ($('span.error').length > 0) {
      return;
    };
    parent_element.after('<span class="error">' + error_text + '</span>');
  };

  function firstUpperCaseLetter(element_value) {
    if (element_value[0] == element_value[0].toUpperCase()) {
      return true;
    };
  };
});
