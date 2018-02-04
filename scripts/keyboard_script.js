
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

function fillTextArea(btn, text_message){
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(){
      if(this.innerText == 'Пробел'){
        text_message.value += " ";
      }else{
        text_message.value += this.innerText;
        console.dir($('.iphone-text-message'));

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
    messages_block_android.appendChild(message_wrapper.cloneNode(true));
    messages_block_iphone.appendChild(message_wrapper);
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
fillTextArea(btn_iphone, iphone_text_message);
fillTextArea(btn_android, android_text_message);

callCreateMessage();
clearTextArea();
