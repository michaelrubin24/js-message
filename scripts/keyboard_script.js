
var btn_iphone = document.getElementsByClassName('btn-iphone');
var btn_android = document.getElementsByClassName('btn-android');
var iphone_text_message = document.getElementsByClassName( 'iphone-text-message')[0];
var android_text_message = document.getElementsByClassName('android-text-message')[0];

function fillTextArea(btn, text_message){
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(){
      if(this.innerText == 'Пробел'){
        text_message.value += " ";
      }else{
        text_message.value += this.innerText;
      }
    })
  }
}
fillTextArea(btn_iphone, iphone_text_message);
fillTextArea(btn_android, android_text_message);
