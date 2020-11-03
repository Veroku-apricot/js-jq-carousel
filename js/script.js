$(document).ready(function () {

  $(".next").click(nextImg);
  $(".prev").click(prevImg);

  //FUNCTIONS
  // function next
  function nextImg() {
    var imgAttiva = $("img.active");
    imgAttiva.removeClass("active");
    // If last img
    if (imgAttiva.hasClass("last")){
      //Go back to first img
      $("img.first").addClass("active");
    }
    // If not, pass .attiva to the next img
    else {
      imgAttiva.next("img").addClass("active");
    }
  }

  // function previous
  function prevImg() {
    var imgAttiva = $("img.active");
    imgAttiva.removeClass("active");
    // If first img
    if (imgAttiva.hasClass("first")){
      //Go to last img
      $("img.last").addClass("active");
    }
    // If not, pass .attiva to the previous img
    else {
      imgAttiva.prev("img").addClass("active");
    }
  }
});
