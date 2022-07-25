$(".content_box").click(function () {
  $(this).children(".next_quest").toggle(300);
});

// function filter() {
//   let pure_menu = document.getElementById("pure_menu");
//   let action_menu = document.getElementById("action_menu");
//   let conflict_menu = document.getElementById("conflict_menu");
// }
$('#pure_menu').click(function() {
  $('.pure').show();
  $('.action').toggle();
  $('.conflict').toggle();
  // console.log($('pure'));
})
$('#conflict_menu').click(function() {
  $('.pure').toggle();
  $('.action').toggle();
  $('.conflict').show();
})
$('#action_menu').click(function() {
  $('.pure').toggle();
  $('.action').show();
  $('.conflict').toggle();
})


function searcher() {
  let search = document.getElementById("search").value.toLowerCase();
  let content_box = document.getElementsByClassName("content_box");

  for (let i = 0; i < content_box.length; i++) {
    question = content_box[i].getElementsByClassName("question");
    // answer = content_box[i].getElementsByClassName("answer");
    if (
      question[0].innerHTML.toLowerCase().indexOf(search) != -1 //||
      // answer[0].innerHTML.toLowerCase().indexOf(search) != -1
    ) {
      content_box[i].style.display = "block";
    } else {
      content_box[i].style.display = "none";
    }
  }
}