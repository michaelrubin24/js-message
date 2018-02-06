$(document).ready(function() {

  jQuery.validator.addMethod('first_letter', function(value, element){
    return value[0] == value[0].toUpperCase() ? true : false;
  }, validation_phrases.first_letter);
  jQuery.validator.addMethod('check_for_number', function(value, element){
    return !value.match(/\d+/) ? true : false;
  }, validation_phrases.check_for_number);
  jQuery.validator.addMethod('check_for_symbols', function(value, element){
    return !value.match(/[!@#$%^&*()_+.,;:]/) ? true : false;
  }, validation_phrases.check_for_symbols);
  jQuery.validator.addMethod('check_for_space', function(value, element){
    return !value.match(/ /) ? true : false;
  }, validation_phrases.check_for_space);
  jQuery.validator.addMethod('password_uppercase', function(value, element){
    return value.match(/.*[A-Z]/) ? true : false;
  }, validation_phrases.password_uppercase);
  jQuery.validator.addMethod('password_number', function(value, element){
    return value.match(/\d+/) ? true : false;
  }, validation_phrases.password_number);

});
