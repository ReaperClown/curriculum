var lang_counter = 1;
var dictionary = {
  "change-lang-to": {
    "pt-br": "Desenvolvedor Front-End",
    "en": "Front-End Developer",
  },
};
var langs = ["pt-br", "en", "sobre", "about"];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function () {
  current_lang_index = ++current_lang_index % 2;
  current_lang = langs[current_lang_index];
  translate();
};

function translate() {
  $("[data-translate]").each(function () {
    var key = $(this).data("translate");
    $(this).html(dictionary[key][current_lang] || "N/A");
  });

  if (lang_counter == 1) {
    $(".roles h2.full-role").css("display", "none"),
      $(".roles h2.full-role-en").css("display", "none");

    $(".hover").on("mouseenter", ".names", ".roles", function () {
      $(".roles h2.main-role").css("display", "none"),
        $(".roles h2.full-role").css("display", "block"),
        $(".roles h2.full-role-en").css("display", "none");
    });
    $(".hover").on("mouseleave", ".names", ".roles", function () {
      $(".roles h2.main-role").css("display", "block"),
        $(".roles h2.full-role").css("display", "none"),
        $(".roles h2.full-role-en").css("display", "none");
    });

    lang_counter = 2;
  } else if (lang_counter == 2) {
    $(".roles h2.full-role").css("display", "none");

    $(".hover").on("mouseenter", ".names", ".roles", function () {
        $(".roles h2.main-role").css("display", "none"),
          $(".roles h2.full-role").css("display", "none"),
          $(".roles h2.full-role-en").css("display", "block");
      });
      $(".hover").on("mouseleave", ".names", ".roles", function () {
        $(".roles h2.main-role").css("display", "block"),
          $(".roles h2.full-role").css("display", "none"),
          $(".roles h2.full-role-en").css("display", "none");
      });

    lang_counter = 1;
  }
}

translate();

$(document).ready(function () {
  var counter = 1;
$(".lang-switch").click(function () {
  if (counter == 1) {
    $(".pt").css("display", "none")
    $(".en").css("display", "block")
    document.title = "Resumé - Willian Mesquita"

    counter = 2;
  } else if (counter == 2) {
    $(".en").css("display", "none")
    $(".pt").css("display", "block")
    document.title = "Currículo - Willian Mesquita"

    counter = 1;
  }
});
});
