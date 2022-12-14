function win(card) {
  $("." + card).addClass("win");
  $("." + card + " .btn").addClass("win-btn");
  $("." + card + " .card-img-top").addClass("win-img");
}
function lose(card) {
  $("." + card).addClass("lose");
}

function load_data() {
  student_data = localStorage.getItem("data");
  student_data = JSON.parse(student_data);
  console.log(student_data);

  $(".studentName").each(function (i, obj) {
    $(this).text(student_data[i].name);
  });

  $(".songName").each(function (i, obj) {
    $(this).text(student_data[i].song);
  });

  $(".score").each(function (i, obj) {
    $(this).text(student_data[i].total);
  });

  $(".card-img-top").each(function (i, obj) {
    $(this).attr("src", student_data[i].img);
  });

  student_data = JSON.stringify(student_data);
  localStorage.setItem("displayData", student_data);
}

function close_window(){
  window.close();
}