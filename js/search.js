const search = document.getElementById("search");
// 검색 입력할 시 다른 페이지 넘어가도 기존 검색어 유지

function searcher() {
  let search = document.getElementById("search").value.toLowerCase();
  let content_box = document.getElementsByClassName("content_box");
  // console.log(search);
  for (let i = 0; i < content_box.length; i++) {
    if (!content_box[i].classList.contains("hide")) {
      let question = content_box[i].getElementsByClassName("question");
      if (question[0].innerHTML.toLowerCase().indexOf(search) != -1) {
        content_box[i].style.display = "block";
        // content_box[i].classList.remove("hide");
      } else {
        content_box[i].style.display = "none";
        // content_box[i].classList.add("hide");
      }
      if (search === "") {
        $(".content_box").removeAttr("style");
      }
      window.scrollTo({ top: 401 });
    }
  }
}

$(window).scroll(function () {
  let height = $("body").height();
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 400) {
    $("#search").css({ position: "fixed", top: "10px", bottom: "auto" });
    $(".menu_list").css({ position: "fixed", "margin-top": "80px" });
    $("#empty_box").show();
  } else {
    $("#search").removeAttr("style");
    $(".menu_list").removeAttr("style");
    $("#empty_box").hide();
  }
});

search.addEventListener("click", moveToSearchbar);
search.addEventListener("keyup", searcher);
