$(document).ready(function () {
  $(window).on("scroll", function () {
    let scrollPos = $(document).scrollTop();
    $(".section").each(function () {
      let sectionTop = $(this).offset().top - 100;
      let sectionId = $(this).attr("id");
      if (scrollPos >= sectionTop) {
        $(".nav-link").removeClass("active");
        $(`.nav-link[href='#${sectionId}']`).addClass("active");
      }
    });
  });
});
