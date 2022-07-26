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
