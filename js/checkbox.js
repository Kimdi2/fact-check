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
function checkbox_function() {
  const checkboxId = $(this).attr("id").split("--")[0];
  if ($(this).attr("id") === `${checkboxId}--checkbox`) {
    // $(`.${checkboxId}`).toggle(100);
    const toggling = $(`.${checkboxId}`);
    for (i = 0; i < toggling.length; i++) {
      if (toggling[i].classList.contains("hide")) {
        // if (toggling[i].style.display === "none") {
        toggling[i].classList.remove("hide");
        toggling[i].style.display = "block";
      } else {
        toggling[i].classList.add("hide");
        toggling[i].style.display = "none";
      }
    }
  }
}

function is_checked() {
  const iCheck = $(this).parent().children("i");
  iCheck.toggle(500);
  const menu = $(this).parent()[0];
  if (menu.classList.contains("menu__checked")) {
    menu.classList.remove("menu__checked");
  } else {
    menu.classList.add("menu__checked");
  }
}

// $(".menu").on("click", is_checked);
$("input[type='checkbox']").on("click", is_checked);
$("input[type='checkbox']").on("click", checkbox_function);
$("input[type='checkbox']").on("click", searcher);
$("input[type='checkbox']").on("click", moveToSearchbar);
