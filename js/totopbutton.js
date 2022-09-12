const toTopBtn = document.querySelector(".to-top-btn");

function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

function moveToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  //
  // $("#search-box").css({ height: "440px" });
  $("#search-box").removeAttr("style");
  $(".search_box").removeAttr("style");
  $("#container").removeAttr("style");
  $("#question_mark__container").show(300);
}
function moveToSearchbar() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// scrollFunction();
// window.onscroll = () => scrollFunction();
toTopBtn.addEventListener("click", moveToTop);
