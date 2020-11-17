//Remove all overlays on clicking logo
$("#logo").click(function () {
  $(".overlay").fadeOut("slow").promise().done( function () {
    $(".hidden").animate({ left: "100vw" }, 1000);
  });
  $(".contactMeBlock").animate({ bottom: -250 }, 500);
});

//Add overlays to page - needs to be cleaned up to not repeat
$("#aboutMe").on("click", function () {
  $("#travelPage")
    .fadeOut()
    .promise()
    .done(function () {
      $(".hidden")
        .animate({ left: "100vw" }, 1000)
        .removeClass("active")
        .promise()
        .done(function () {
          $(".contactMeBlock")
            .animate({ bottom: -250 }, 500)
            .promise()
            .done(function () {
              $("#hiddenAboutMe .hidden")
                .animate({ left: `0` }, 1000)
                .promise()
                .done(function () {
                  $("#aboutMePage").fadeToggle().css("display", "flex");
                });
            });
          showingContactSlider = false;
          $("#hiddenAboutMe .hidden").addClass("active");
        });
    });
});

$("#travel").on("click", function () {
  $("#aboutMePage")
    .fadeOut()
    .promise()
    .done(function () {
      $(".contactMeBlock")
        .animate({ bottom: -250 }, 500)
        .promise()
        .done(function () {
          $(".hidden")
            .animate({ left: "100vw" }, 1000)
            .removeClass("active")
            .promise()
            .done(function () {
              $("#hiddenTravel .hidden")
                .animate({ left: "0" }, 1000)
                .promise()
                .done(function () {
                  $("#travelPage")
                    .fadeToggle()
                    .css("display", "flex")
                    .promise().done;
                });
            });
        });
      showingContactSlider = false;
      $("#hiddenTravel .hidden").addClass("active");
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
