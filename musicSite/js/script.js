function showPlaylist() {
  let windowBottom = $(window).height() + $(window).scrollTop(); // window Bottom의 좌표

  // 모든 playlist를 하나씩 살펴보고 
  // 그 playlist의 중간지점좌표가 windowBottom보다 작으면
  // 그 playlist를 보이게 해라!
  $(".playlist").each(function() {
    let appearPlaylist = $(this).height() / 2 + $(this).offset().top;
    // $(this).outerHeight() / 2 + $(this).position().top();
    if (windowBottom >= appearPlaylist) {
      $(this).animate({ opacity: "1" }, 1000);
    }
  });

  if (windowBottom == $(document).height()) {  // page의 맨 밑 좌표랑 windowBottom이랑 같을 때
    $(".to-top-btn").fadeIn(500);
  } else {
    $(".to-top-btn").fadeOut(500);
  }
}

$(window).on("scroll", showPlaylist);
// 처음에 loading될때 호출
showPlaylist();

// top으로 올라가기
$(".to-top-btn").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
