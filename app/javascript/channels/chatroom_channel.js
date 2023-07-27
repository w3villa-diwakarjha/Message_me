import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    
    $('#message-container').append((data.modified_message))
    Text_bar();
    scroll_bottom();
   }
});

const scroll_bottom= ()=>{
  if($('#message-overflow').length>0)
  {
    $('#message-overflow').scrollTop($('#message-overflow')[0].scrollHeight);
  }
}


const Text_bar=function(){
  $('#message_body').on('keydown',function(event) {
    // Check if the key pressed is the Enter key (key code 13)
    if (event.keyCode == 13) {
      // Clear the input field when Enter is pressed
      $('button').click();
      event.target.value="";
    }
  })
}


