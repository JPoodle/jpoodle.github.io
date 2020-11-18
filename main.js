//Remove all overlays on clicking logo
$("#logo").click(function () {
  $(".overlay").fadeOut("slow").promise().done( function () {
    $(".hidden").animate({ left: "100vw" }, 1000);
  });
  $(".contactMeBlock").animate({ bottom: -250 }, 500);
});

var aboutMeActive = 0;
//Add overlays to page - needs to be cleaned up to not repeat
$("#aboutMe").on("click", function () {
  $(".overlay.active").fadeOut().removeClass("active").promise().done(function () {
      $(".hidden.active").animate({ left: "100vw" }, 1000).removeClass("active").promise().done(function () {
          $(".contactMeBlock").animate({ bottom: "-250" }, 500, function () {
              if (aboutMeActive%2 == 0){
                $("#hiddenAboutMe.hidden").animate({ left: "0" }, 1000).addClass("active").promise().done(function () {
                  $("#aboutMePage.overlay").fadeIn().addClass("active").css("display", "flex").promise().done();
              });
            }aboutMeActive++; travelActive = 0;});
          showingContactSlider = false;
    });
    });
});

var travelActive = 0;
//Add overlays to page - needs to be cleaned up to not repeat
$("#travel").on("click", function () {
  $(".overlay.active").fadeOut().removeClass("active").promise().done(function () {
      $(".hidden.active").animate({ left: "100vw" }, 1000).removeClass("active").promise().done(function () {
          $(".contactMeBlock").animate({ bottom: "-250" }, 500, function () {
              if (travelActive%2 == 0){
                $("#hiddenTravel.hidden").animate({ left: "0" }, 1000).addClass("active").promise().done(function () {
                  $("#travelPage.overlay").fadeIn().addClass("active").css("display", "flex").promise().done();
              });
            }travelActive++; aboutMeActive =0});
          showingContactSlider = false;
    });
    });
});

//Slide up "Contact Me" section
var showingContactSlider = false;
$("#contactMe").click(function () {
  $(".overlay")
    .fadeOut()
    .promise()
    .done(function () {
      $(".hidden")
        .animate({ left: "100vw" }, 1000)
        .removeClass("active")
        .promise()
        .done(function () {
          if (!showingContactSlider) {
            showingContactSlider = true;
            $(".contactMeBlock").animate({ bottom: 0 }, 500).promise().done();
          } else if (showingContactSlider) {
            showingContactSlider = false;
            $(".contactMeBlock")
              .animate({ bottom: -250 }, 500)
              .promise()
              .done();
          }
        });
    });
});
