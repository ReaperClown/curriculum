document.addEventListener('DOMContentLoaded', () => {
  var tl = gsap.timeline();

  tl
  .from(".menu-1", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.5,
      ease: "power3.out",
  })
  .from(".menu-2", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
  }, "-=0.8")
  .from(".menu-3", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
  }, "-=0.8")
  .from(".menu-4", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
  }, "-=0.8")
  .from(".main-logo", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
  }, "-=0.8")
  .from(".container-item div", {
      duration: 1,
      y: 300,
      opacity: 0,
      stagger: {each: 0.2},
      ease: "power3.out",
  }, "-=0.8")
  .from(".container-item img", {
      duration: 1,
      y: 300,
      opacity: 0,
      ease: "power3.out",
  }, "-=0.8")
  .from(".bg-hero", {
      duration: 1,
      y: 300,
      opacity: 0,
      ease: "power3.out",
  }, "-=0.8")


  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#section-1 div",{
      duration: 1,
      y: 300,
      opacity: 0,
      stagger: {each: 0.2},
      ease: "power3.out",
      scrollTrigger: {
          trigger: "#section-1",

      }
  });

  gsap.from("#section-2 div",{
      duration: 1,
      y: 300,
      opacity: 0,
      stagger: {each: 0.2},
      ease: "power3.out",
      scrollTrigger: {
          trigger: "#section-2",

      }
  });
});

$(document).ready(function () {
  $(".toggleDark").click(function () {
    $(".background").toggleClass("active");
    $(".contact-info-description").toggleClass("active");
    $("main section").toggleClass("active");
    $("main section p").toggleClass("active");
    $(".social").toggleClass("active");

    if ($(this).is(":checked"))
      $("section.main-content").css("box-shadow", "0px 24px 3px -24px #d9e2ee"),
        $(".contact-info-image img").css(
          "box-shadow",
          "rgba(255, 255, 255, 0.2) 0px 20px 30px"
        );
    else
      $("section.main-content").css("box-shadow", "0px 24px 3px -24px #171718"),
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
  $(".icon").click(function () {
      let x = document.getElementById("myNav");
      let u = document.getElementById("lang-switch");
      let d = document.getElementById("divider");
      if (x.className === "nav" && u.className === "lang-switch" && d.className === "divider") {
        x.className += " responsive";
        u.className += " active";
        d.className += " active";
      } else {
        x.className = "nav";
        u.className = "lang-switch";
        d.className = "divider";
      }
  });
  $("a.lang-pt").click(function () {
      $(".lang-pt").css("display", "none")
      $(".country-br").css("display","none")

      $(".lang-en").css("display","block")
      $(".country-us").css("display","block")
  });
  $("a.lang-en").click(function () {
    $(".lang-en").css("display", "none")
    $(".country-us").css("display","none")

    $(".lang-pt").css("display","block")
    $(".country-br").css("display","block")
});
});

$(function () {
  $('#mail').on('click', function (event) {
      event.preventDefault();
    alert("Huh");
    var email = 'test@theearth.com';
    var subject = 'Circle Around';
    var emailBody = 'Some blah';
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
  });
});