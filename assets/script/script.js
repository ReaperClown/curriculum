$(document).ready(function () {
  $(".toggleDark").click(function () {
    $(".background").toggleClass("active");
    $(".contact-info-description").toggleClass("active");
    $("main section").toggleClass("active");
    $("main section p").toggleClass("active");
    $(".social").toggleClass("active");

    if ($(this).is(":checked"))
      $("section").css("box-shadow", "0px 24px 3px -24px #d9e2ee"),
        $(".contact-info-image img").css(
          "box-shadow",
          "rgba(255, 255, 255, 0.2) 0px 20px 30px"
        );
    else
      $("section").css("box-shadow", "0px 24px 3px -24px #171718"),
        $(".contact-info-image img").css(
          "box-shadow",
          "rgba(0, 0, 0, 0.9) 0px 20px 30px"
        );
  });
  $(".hover").on("mouseenter", ".names",".roles", function () {
    $(".names h1.name").css("display", "none"),
    $(".names h1.full-name").css("display", "block", "margin-bottom", "0.3rem")
    $(".roles h2.main-role").css("display", "none"),
    $(".roles h2.full-role").css("display", "block")
  });
  $(".hover").on("mouseleave", ".names",".roles", function () {
    $(".names h1.name").css("display", "block"),
    $(".names h1.full-name").css("display", "none"),
    $(".roles h2.main-role").css("display", "block"),
    $(".roles h2.full-role").css("display", "none")

  });
});
