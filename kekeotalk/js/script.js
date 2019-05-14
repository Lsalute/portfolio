$("#send").on("click", sendMessage);

function sendMessage() {
  let message = $('textarea').val();
  if (message != '') {
    $(".chatbox").append('<div class="my-bubble bubble">' + message + "</div>");
    $('textarea').val('');
  }
}
