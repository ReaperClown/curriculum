$(document).ready(function () {
  $(".toggleDark").click(function () {
    $(".background").toggleClass("active");
    $(".contact-info-description").toggleClass("active");
    $("main section").toggleClass("active");
    $("main section p").toggleClass("active");
    $(".social").toggleClass("active");

    if ($(this).is(":checked"))
      $("section").css("border-bottom", "1px solid #d9e2ee"),
      $(".contact-info-image img").css("box-shadow", "rgba(255, 255, 255, 0.2) 0px 20px 30px");
    else
      $("section").css("border-bottom", "1px solid #171718"),
      $(".contact-info-image img").css("box-shadow", "rgba(0, 0, 0, 0.9) 0px 20px 30px");
  });
});
