const pure_menu = document.querySelector("#pure");
const pure_label = document.querySelector("#pure + label");
const pure_content = document.querySelectorAll(".pure");
console.log(pure_content);

const action_menu = document.querySelector(".menu_list #action");
const conflict_menu = document.querySelector(".menu_list #conflict");
const case_law_menu = document.querySelector(".menu_list #case_law");
console.log(pure_menu, pure_label);

function changeBgColor() {
  if (pure_menu.checked) {
    pure_label.classList.add("changed-bg");
    // pure_content.classList.add("hide");
    for (i = 0; i < pure_content.length; i++) {
      pure_content[i].classList.add("hide");
    }
  } else {
    pure_label.classList.remove("changed-bg");
    for (i = 0; i < pure_content.length; i++) {
      pure_content[i].classList.remove("hide");
    }
  }
}

pure_label.addEventListener("click", changeBgColor);
