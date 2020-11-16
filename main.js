$("#logo").click(function () {
  $(".overlay").css("display", "none");
});

$("#aboutMe").on('click', function () {
  $("#travelPage").fadeOut()
  $(".contactMeBlock").animate({ top: 1000 }, 500);
  $("#aboutMePage").fadeToggle(function(){
  }).css("display","flex");
});

$("#travel").on('click', function () {
  $("#aboutMePage").fadeOut()
  $(".contactMeBlock").animate({ top: 1000 }, 500);
  $("#travelPage").fadeToggle(function(){
  }).css("display","flex");
});

var showingSlider = false;
$("#contactMe").click(function () {
  $(".overlay").css("display", "none");

  if (!showingSlider) {
    showingSlider = true;
    $(".contactMeBlock").animate({ top: 500 }, 500);
  } else {
    if (showingSlider) {
      showingSlider = false;
      $(".contactMeBlock").animate({ top: 1000 }, 500);
    }
  }
});
