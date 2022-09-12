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

// function is_clicked() {
//   const input = $("input[type='checkbox']").parent().children("i");
//   const content_box = $(".content_box");
//   // input.toggle(500);
//   for (i = 0; i < input.length; i++) {
//     if (!input.parent()[i].classList.contains("menu__checked")) {
//       input.parent()[i].classList.add("menu__checked");
//     }
//   }
//   for (i = 0; i < content_box.length; i++) {
//     content_box[i].classList.add("hide");
//     if (content_box[i].classList.contains("pure")) {
//       content_box[i].classList.remove("hide");
//     }
//   }
// }

// $("#img_pure").on("click", is_clicked);
// $("#img_conflict").on("click", is_clicked);
// $("#img_action").on("click", is_clicked);
// $("#img_case_law").on("click", is_clicked);

// $(".menu").on("click", is_checked);
$("input[type='checkbox']").on("click", is_checked);
$("input[type='checkbox']").on("click", checkbox_function);
$("input[type='checkbox']").on("click", searcher);
$("input[type='checkbox']").on("click", moveToSearchbar);
