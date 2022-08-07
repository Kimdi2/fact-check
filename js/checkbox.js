$(".content_box").click(function () {
  $(this).children(".next_quest").toggle(300);
});
// const contentBox = Array.from(document.getElementsByClassName("content_box"));

// contentBox.forEach(click);
// function click(event) {
//   event.children[0].addEventListener("click", (event) => {
//     event.path[1].children[1].classList.toggle("show");
//   });
// }
