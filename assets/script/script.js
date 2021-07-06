$(document).ready(function() {
  $(".toggleDark").click(function() {
    $(".background").toggleClass("active");
    $(".contact-info-description").toggleClass("active");
    $("main section").toggleClass("active");
    $("main section p").toggleClass("active");
    $(".social").toggleClass("active");
    $("section").css("border-bottom", "1px solid #d9e2ee");
  });
});