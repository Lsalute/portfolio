function scrollHandler() {
  if ($(window).scrollTop() >= $(".about").position().top) {
    $(".menu-right button").css("color", "#4a4a4a");
  } else {
    $(".menu-right button").css("color", "white");
  }

  $(".bar").each(function() {
    if ($(window).scrollTop() >= $(".about").position().top) {
      let percentage = $(this).find(".percentage").text();
      $(this).find(".inner-bar").animate({ width: percentage }, 1000);
    }
  });
  $("section").each(function() {
    if ($(window).scrollTop() >= $(this).position().top) {
      $(this).find(".vertical-center").animate({ opacity: 1, top: 0 }, 1000);
    }
  });
}
$(window).on("scroll", scrollHandler);
scrollHandler();

$(".menu-right button").on("click", function() {
  let id = $(this).attr("id");
  if (id === "about-btn") {
    $("html, body").animate({ scrollTop: $(".about").position().top }, 1000);
  } else if (id === "contact-btn") {
    $("html, body").animate({ scrollTop: $(".contact").position().top }, 1000);
  }
});
