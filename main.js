//When a link is clicked in the navbar, bring in the overlay
//and display the content for that page

//!!! Need to remember to turn off overlays too

$("#logo").click(function () {
  $(".overlay").css("display", "none");
});

$("#aboutMe").click(function () {
  $(".overlay").css("display", "none");
  $("#aboutMePage .overlay").css("display", "flex");
});

$("#travel").click(function () {
  $(".overlay").css("display", "none");
  $("#travelPage .overlay").css("display", "flex");
});

var showingSlider = false;
$('#contactMe').click(function(){
  $(".overlay").css("display", "none");

        if (!showingSlider){
            showingSlider=true;
            $('.foot').animate({top: 500}, 500);
        }
    else {
        if (showingSlider){
            showingSlider=false;
            $('.foot').animate({top: 1000}, 500);
        }        
    }
});