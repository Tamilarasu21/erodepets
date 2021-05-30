//active nav item
$(".nav-item").on("click", function (e) {
  // Remove class active form all li.nav-tiem
  $("li.nav-item").removeClass("active");
  // Add Class to current Element.
  $(this).addClass("active");
});
// close left slide menu after clicking nav-item
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

(function () {
  $("#msbo").on("click", function () {
    $("body").toggleClass("msb-x");
  });
})();
