// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'jquery';

require("semantic-ui-sass")

$(document).on("turbolinks:load", () => $(".ui.dropdown").dropdown());

Rails.start()
Turbolinks.start()
ActiveStorage.start()

const scroll_bottom = () => {
  if ($('#message-overflow').length > 0) {
    $('#message-overflow').scrollTop($('#message-overflow')[0].scrollHeight);
  }
}

const Text_bar=function(){
  // const k=document.getElementById('message_body');
  // k.addEventListener('keypress',(e)=>{
  //   if(e.which==13)
  //   {
  //     console.log(e.target.value)
  //     e.target.value=""
  //   }
  // })

  $('#message_body').on('keydown', function(e){
    if(e.keyCode==13){
      $('button').click();
      e.target.value=""
    };
  });
};


$(document).on('turbolinks:load', function () {
  $('.ui.dropdown').dropdown();


  $('.message .close').on('click', function () {
    $(this).closest('.message').transition('fade');
  });
  scroll_bottom();
  Text_bar();
  
})



