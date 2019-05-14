$(".country_list .a-tag").on("click", selectMenu);

$("#photo").on("mouseenter", mouseEnterPhoto);
$("#photo").on("mouseleave", mouseLeavePhoto);

// mouse와는 다르게 keyboard는 전체화면에서 일어나는 event
$(document).on("keydown", selectMenu);

function selectMenu(event) {
  let targetID = "";

  if (event.type === "click") {
    targetID = event.currentTarget.id;
  } else if (event.type === "keydown") {
    if (event.key === "1") {
      targetID = "home";
    } else if (event.key === "2") {
      targetID = "seoul";
    } else if (event.key === "3") {
      targetID = "tokyo";
    } else if (event.key === "4") {
      targetID = "paris";
    }
  }
  $('#photo').hide();
  $("#photo").attr("src", "./images/" + targetID + ".png");
  $('#photo').fadeIn(1000);
  $(".country_list .a-tag").css("font-weight", "normal");
  $("#" + targetID).css("font-weight", "bold");
}


// 사진에 그림자
function mouseEnterPhoto() {
  $("#photo").css("box-shadow", "5px 10px");
}
// 사진 그림자 빼기
function mouseLeavePhoto() {
  $("#photo").css("box-shadow", "none");
}

