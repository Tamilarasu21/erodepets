//active nav item
$(".nav-item").on("click", function (e) {
  // Remove class active form all li.nav-tiem
  $(".nav-item").removeClass("active");
  // Add Class to current Element.
  $(this).addClass("active");
});
// close left slide menu after clicking nav-item
$(".navbar-nav>.nav-item>.nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
