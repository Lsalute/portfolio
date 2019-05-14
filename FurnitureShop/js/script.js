$("#popup-trigger").on("click", popUpAlert);
$("#close-btn").on("click", popDownAlert);
$(document).on("keydown", popDownAlert);

function popUpAlert() {
  $("#popup").fadeIn(1000);
}

function popDownAlert(event) {
  if (event.key === "Escape") {
    $("#popup").fadeOut(1000);
  } else {
    $("#popup").fadeOut(1000);
  }
}
