$(document).ready(function () {

  $(".next").click(nextImg).click(nextCircle);
  $(".prev").click(prevImg).click(prevCircle);

  // Browse img using keyboard arrows
  $(document).keydown(function(e){
   var keypressed = e.which;
   if (keypressed == 39 || keypressed == 68){
     nextImg();
     nextCircle();
     console.log('pressed next');
   }else if(keypressed == 37 || keypressed == 65){
     prevImg();
     prevCircle();
     console.log('pressed prev');
   }
  });


  //FUNCTIONS
  // function next img
  function nextImg() {
    var imgActive = $("img.active");
    imgActive.removeClass("active");
    // If last img
    if (imgActive.hasClass("last")){
      //Go back to first img
      $("img.first").addClass("active");
    }
    // If not, pass .active to the next img
    else {
      imgActive.next("img").addClass("active");
    }
  }

  // function previous img
  function prevImg() {
    var imgActive = $("img.active");
    imgActive.removeClass("active");
    // If first img
    if (imgActive.hasClass("first")){
      //Go to last img
      $("img.last").addClass("active");
    }
    // If not, pass .active to the previous img
    else {
      imgActive.prev("img").addClass("active");
    }
  }

  //function circle next
  function nextCircle() {
    var activeCircle = $("i.active");
    activeCircle.removeClass("active");
    // If last circle
    if (activeCircle.hasClass("last")){
      //Go back to first circle
      $("i.first").addClass("active");
    }
    // If not, pass .active to the next circle
    else {
      activeCircle.next("i").addClass("active");
    }
  }

  //function circle prev
  function prevCircle() {
    var activeCircle = $("i.active");
    activeCircle.removeClass("active");
    // If first circle
    if (activeCircle.hasClass("first")){
      //Go to last circle
      $("i.last").addClass("active");
    }
    // If not, pass .active to the prev circle
    else {
      activeCircle.prev("i").addClass("active");
    }
  }
});
