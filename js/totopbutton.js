const toTopBtn = document.querySelector(".to-top-btn");

function scrollFunction() {
  // console.log(document.body.scrollTop);
  // console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 50) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

function moveToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}

scrollFunction();
window.onscroll = () => scrollFunction();
toTopBtn.addEventListener("click", moveToTop);
