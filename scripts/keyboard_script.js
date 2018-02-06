$(document).ready(function(){
var btn_iphone = document.getElementsByClassName('btn-iphone');
var btn_android = document.getElementsByClassName('btn-android');
var iphone_text_message = document.getElementsByClassName( 'iphone-text-message')[0];
var android_text_message = document.getElementsByClassName('android-text-message')[0];

var input_text_iphone = $('.iphone-text-message:first');
var messages_iphone = $(".iphone-messages")[0];
var message_wrapper_iphone = "message-wrapper-iphone";
var message_iphone = "message-iphone";

var input_text_android = $('.android-text-message:first');
var messages_android = $(".android-messages")[0];
var message_wrapper_android = "message-wrapper-android";
var message_android = "message-android";

var send_message_android =  $('.android-message-btn')[0];
var send_message_iphone =  $('.iphone-message-btn')[0];
var enter_android = $('.enter-android')[0];
var enter_iphone = $('.enter-iphone')[0];

var upper_iphone = $('.upper-case-iphone');
var upper_android = $('.upper-case-android');

var keyboard_ru_iphone = $('.keyboard-ru-iphone');
var keyboard_ru_android = $('.keyboard-ru-android');
var keyboard_en_iphone = $('.keyboard-en-iphone');
var keyboard_en_android = $('.keyboard-en-android');
var change_iphone_language = $('.change-iphone-language');
var change_android_language = $('.change-android-language');

var keyboard_number_iphone = $('.keyboard-number-iphone');
var keyboard_number_android = $('.keyboard-number-android');
var numbers_iphone = $('.numbers-iphone');
var numbers_android = $('.numbers-android');

// .hidden-keyboard

// console.log(upper);
function fillTextArea(btn, text_message, upper){
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(){
      if(this.innerText == 'Пробел'){
        text_message.value += " ";
      }else if(upper.hasClass("active-upper")){
        text_message.value += this.innerText.toUpperCase();
      }else{
        text_message.value += this.innerText;
      }
    })
  }
}

function createMessage(input_text, messages_block_android, messages_block_iphone, message_wrapper_style, message_style){
  var message_wrapper = document.createElement("div");
  var message = document.createElement("span");
  message_wrapper.className = message_wrapper_style;
  message.className = message_style;
  message.innerHTML = input_text.val();
  if(message.innerHTML.length > 1){
    message_wrapper.appendChild(message);
    var message_wrapper_android = message_wrapper.cloneNode(true);
    messages_block_android.appendChild(message_wrapper_android);
    messages_block_iphone.appendChild(message_wrapper);
    input_text.val("");
    message_wrapper.scrollIntoView(top);
    message_wrapper_android.scrollIntoView(top);
    message_wrapper.addEventListener('dblclick', function(){
      this.remove();
    });
    message_wrapper_android.addEventListener('dblclick', function(){
      this.remove();
    });
  }else{
    input_text.val("мало символов :)");
  }
}

function callCreateMessage(){
  send_message_iphone.addEventListener('click', function(){
      createMessage(input_text_iphone, messages_android, messages_iphone, message_wrapper_iphone, message_iphone);

  }),
  send_message_android.addEventListener('click', function(){
      createMessage(input_text_android, messages_android, messages_iphone, message_wrapper_android, message_android);
  }),
  enter_iphone.addEventListener('click', function(){
      createMessage(input_text_iphone, messages_android, messages_iphone, message_wrapper_iphone, message_iphone);
  }),
  enter_android.addEventListener('click', function(){
      createMessage(input_text_android, messages_android, messages_iphone, message_wrapper_android, message_android);
  }),
  input_text_iphone[0].addEventListener("keyup", function(){
    if(event.keyCode == 13){
      createMessage(input_text_iphone, messages_android, messages_iphone, message_wrapper_iphone, message_iphone);
    }
  }),
  input_text_android[0].addEventListener("keyup", function(){
    if(event.keyCode == 13){
      createMessage(input_text_android, messages_android, messages_iphone, message_wrapper_android, message_android);
    }
  })
}

function clearTextArea(){
  input_text_iphone[0].addEventListener("keyup", function(){
    if(event.keyCode == 46){
      input_text_iphone[0].value = "";
    }
  }),
  input_text_android[0].addEventListener("keyup", function(){
    if(event.keyCode == 46){
      input_text_android[0].value = "";
    }
  })
}

function toggleUpperCase(upper_iphone, upper_android){
  upper_iphone.click(function(){
    upper_iphone.toggleClass('active-upper');
  });
  upper_android.click(function(){
    upper_android.toggleClass('active-upper');
  });
}

function changeLanguage(keyboard_ru_iphone, keyboard_ru_android, keyboard_en_iphone, keyboard_en_android, change_iphone_language, change_android_language){
  change_iphone_language.click(function(){
    keyboard_ru_iphone.toggleClass('hidden-keyboard');
    keyboard_en_iphone.toggleClass('hidden-keyboard');
  });

  change_android_language.click(function(){
    keyboard_ru_android.toggleClass('hidden-keyboard');
    keyboard_en_android.toggleClass('hidden-keyboard');
  });
}
function changeOnNumbers(numbers_iphone, numbers_android, keyboard_number_iphone, keyboard_number_android, keyboard_ru_iphone, keyboard_ru_android, keyboard_en_iphone, keyboard_en_android){
  numbers_iphone.click(function(){
    if($('.keyboard-ru-iphone:not(.hidden-keyboard)')){
      keyboard_ru_iphone.toggleClass('hidden-keyboard');
      keyboard_number_iphone.toggleClass('hidden-keyboard');
    }else if($('.keyboard-en-iphone:not(.hidden-keyboard)')){
      keyboard_en_iphone.toggleClass('hidden-keyboard');
      keyboard_number_iphone.toggleClass('hidden-keyboard');
    }
  });

  numbers_android.click(function(){
    if($('.keyboard-ru-android:not(.hidden-keyboard)')){
      keyboard_ru_android.toggleClass('hidden-keyboard');
      keyboard_number_android.toggleClass('hidden-keyboard');
    }else if($('.keyboard-en-android:not(.hidden-keyboard)')){
      keyboard_en_android.toggleClass('hidden-keyboard');
      keyboard_number_android.toggleClass('hidden-keyboard');
    }
  });
}
changeLanguage(keyboard_ru_iphone, keyboard_ru_android, keyboard_en_iphone, keyboard_en_android, change_iphone_language, change_android_language);
changeOnNumbers(numbers_iphone, numbers_android, keyboard_number_iphone, keyboard_number_android, keyboard_ru_iphone, keyboard_ru_android, keyboard_en_iphone, keyboard_en_android);
toggleUpperCase(upper_iphone, upper_android);
fillTextArea(btn_iphone, iphone_text_message, upper_iphone);
fillTextArea(btn_android, android_text_message, upper_android);
callCreateMessage();
clearTextArea();
});
