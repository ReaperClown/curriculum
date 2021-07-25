var counter = 1;

const toggleButton = document.getElementsByClassName("main-logo")[0];
const navbar = document.getElementsByClassName("menu")[0];
const navbarLeft = document.getElementsByClassName("menu-left")[0];
const navbarRight = document.getElementsByClassName("menu-right")[0];

document.addEventListener("DOMContentLoaded", () => {
  var tl = gsap.timeline();

  tl.from(".menu-1", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out",
  })
    .from(
      ".menu-2",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".menu-3",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".menu-4",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".main-logo",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".container-item div",
      {
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: { each: 0.2 },
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".container-item img",
      {
        duration: 1,
        y: 300,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".bg-hero",
      {
        duration: 1,
        y: 300,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8"
    );

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#section-1 div", {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: { each: 0.2 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#section-1",
    },
  });

  gsap.from("#section-2 div", {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: { each: 0.2 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#section-2",
    },
  });
});

$(document).ready(function () {

  $(".menu-logo, .logo-menu").on("click", function () {
    $(".menu-left").toggleClass("active");
    $(".menu-right").toggleClass("active");
    $(".menu").toggleClass("active");
    $(".main-logo").css("animation", "none");
  });

  const main = document.querySelector('main');
  const x = window.matchMedia("(min-width: 601px)");
  const y = window.matchMedia("(max-width: 600px)");

  const interval = setInterval(function() {
    if (y.matches) {
      $(".nav").css("box-shadow", "none")
    } else if (x.matches) {
      $(".nav").css("box-shadow", "")
    } else {
      $(".nav").css("box-shadow", "")
    }
  }, 2000);


  var previousScroll = main.scrollTop;

  main.onscroll = function () {
    var currentScroll = main.scrollTop;

    if (previousScroll > currentScroll && x.matches) {
      $("#myNav").css("top", "0");
      if ($("#myNav").css("top", "0")) {
        $("#main-container").css("top", "50px")
      }
    } else if (y.matches) {
      $("#myNav").css("top", "0px");
      $("#main-container").css("top", "0");
    } else {
      $("#myNav").css("top", "0px");
      if ($("#myNav").css("top", "-50px")) {
        $("#main-container").css("top", "0")
      }
    }
    previousScroll = currentScroll;

    if (main.scrollTop > 200) {
      $("#backTop").css("display", "block");
    } else {
      $("#backTop").css("display", "none");
    }
  };

$("#backTop").click(function() {
  main.scrollTop = 0;
});

  $(".toggleDark").click(function () {
    $("body").toggleClass("active");
    $(".contact-info-description").toggleClass("active");
    $("main section").toggleClass("active");
    $("main section p").toggleClass("active");
    $(".social").toggleClass("active");
    $(".main-content h2").toggleClass("active");
    $(".portfolio-formation h3, .portfolio-formation h4, .portfolio-formation ul li b").toggleClass(
      "active"
    );
    $(".portfolio-experience h3, .portfolio-experience h6 b").toggleClass("active");
    $(".nav, .nav a").toggleClass("dark-mode");
    $(".nav img.country-us, .nav img.country-br").toggleClass("active");
    $(".SNS-list-item span").toggleClass("active");
    $("social.me").toggleClass("active");
    $(".skills-content span").toggleClass("active");
    $(".download").toggleClass("active");
    $(".skills-content a img").toggleClass("active");
    $("#toggleDarkLabel").toggleClass("active");
    $(".whatsapp").toggleClass("active");
    $(".backTop").toggleClass("active");

    if ($(this).is(":checked") && y.matches || $(this).is(":checked") && y.matches && $(".nav").hasClass("responsive")) {
      $(".nav").addClass("test")
      $(".nav").removeClass("dark-mode")
    } else {
      $(".nav").removeClass("test")
    }

    if ($(this).is(":checked")) {
      $("section.main-content").css("box-shadow", "0px 24px 3px -24px #d9e2ee"),
        $(".contact-info-image img").css(
          "box-shadow",
          "rgba(255, 255, 255, 0.2) 0px 20px 30px"
        ),
        $(".nav.responsive").addClass("dark-mode"),
        $("#divider").css("box-shadow", "1px 1px 1px 0px #d9e2ee"),
        $(".SNS-list-item span").addClass("dark-mode-test");
        $(".skills-content span").css("background", "#ddd", "color", "#111"),
        $(".skills-content span").addClass("teste");

      } else {

      $("section.main-content").css("box-shadow", "0px 24px 3px -24px #171718"),
        $(".contact-info-image img").css(
          "box-shadow",
          "rgba(0, 0, 0, 0.9) 0px 20px 30px"
        ),
        $(".nav.responsive").removeClass("dark-mode"),
        $(".nav").removeClass("dark-mode"),
        $("#divider").css("box-shadow", "1px 1px 1px 0px #141414"),
        $(".SNS-list-item span").removeClass("dark-mode-test"),
        $(".skills-content span").css("background", "#111", "color", "#ddd"),
        $(".skills-content span").removeClass("teste");
      }
  });

  // document.querySelector("label[for=nav-icon] > a")
  // .onclick = function(e) {
  //   var el = document.getElementById(
  //     this.parentElement.htmlFor
  //   );
  //   el.checked = !el.checked;
  // }

  $(".hover").on("mouseenter", ".names", ".roles", function () {
    $(".names h1.name").css("display", "none"),
      $(".names h1.full-name").css(
        "display",
        "block",
        "margin-bottom",
        "0.3rem"
      ),
      $(".roles h2.main-role").css("display", "none"),
      $(".roles h2.full-role").css("display", "block");
  });

  $(".hover").on("mouseleave", ".names", ".roles", function () {
    $(".names h1.name").css("display", "block"),
      $(".names h1.full-name").css("display", "none"),
      $(".roles h2.main-role").css("display", "block"),
      $(".roles h2.full-role").css("display", "none");
  });

  $(".icon").click(function () {
    let x = document.getElementById("myNav");
    let u = document.getElementById("lang-switch");
    let d = document.getElementById("divider");
    if (
      x.className === "nav" &&
      u.className === "lang-switch" &&
      d.className === "divider"
    ) {
      x.className += " responsive";
      u.className += " active";
      d.className += " active";
    } else if (x.className === "nav dark-mode") {
      x.className = "nav responsive dark-mode";
      u.className += " active";
      d.className += " active";
    } else if ($(".toggleDark").is(":checked")) {
      x.className = "nav dark-mode";
      d.className = "divider";
    } else {
      x.className = "nav";
      u.className = "lang-switch";
      d.className = "divider";
    }
  });

  $("a.lang-pt").click(function () {
    $(".lang-pt").css("display", "none");
    $(".country-br").css("display", "none");

    $(".lang-en").css("display", "block");
    $(".country-us").css("display", "block");
  });
  $("a.lang-en").click(function () {
    $(".lang-en").css("display", "none");
    $(".country-us").css("display", "none");

    $(".lang-pt").css("display", "block");
    $(".country-br").css("display", "block");
  });
});
