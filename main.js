$(document).ready(function () {
  //Remove all dynamic elements on clicking logo
  $("#logo").click(function () {
    $(".overlay") //Remove any overlays
      .fadeOut("slow")
      .promise()
      .done(function () {
        $(".hidden").animate({ left: "100vw" }, 1000); //Remove any photo backgrounds
      });
    $(".contactMeBlock").animate({ bottom: "-100vh" }, 500); //Remove the contact me block
    aboutMeActive = 0;
    travelActive = 0;
    showingContactSlider = false;
  });

  //Remove any dynamic elements from the page, then bring in the "About Me" page. If "About Me" is active, only remove that page.
  var aboutMeActive = 0; //This is a counter. If it is even, "About Me" will come in.
  $("#aboutMe").on("click", function () {
    $(".overlay.active") //Remove any other overlays active.
      .fadeOut()
      .removeClass("active")
      .promise()
      .done(function () {
        $(".hidden.active") //Remove the active photo background.
          .animate({ left: "100vw" }, 1000)
          .removeClass("active")
          .promise()
          .done(function () {
            $(".contactMeBlock").animate(
              { bottom: "-100vh" },
              500,
              function () {
                //Remove the contact me block
                if (aboutMeActive % 2 == 0) {
                  //Check if "About Me" needs to only be brought in (inactive) or only removed (active)
                  $("#aboutMeBackground.hidden")
                    .animate({ left: "0" }, 1000)
                    .addClass("active")
                    .promise()
                    .done(function () {
                      $("#aboutMeOverlay.overlay") //Bring in the overlay
                        .fadeIn()
                        .addClass("active")
                        .css("display", "flex")
                        .promise()
                        .done();
                    });
                }
                aboutMeActive++; //Increase the counter.
                travelActive = 0; //Reset the counter for "Travel". If it not reset, the photo background will
                //be brought in again after being removed.
              }
            );
            showingContactSlider = false; //Note that the contact me block has been put away
          });
      });
  });

  //This is the same as "About Me" but for "Travel"
  var travelActive = 0;
  $("#travel").on("click", function () {
    $(".overlay.active")
      .fadeOut()
      .removeClass("active")
      .promise()
      .done(function () {
        $(".hidden.active")
          .animate({ left: "100vw" }, 1000)
          .removeClass("active")
          .promise()
          .done(function () {
            $(".contactMeBlock").animate(
              { bottom: "-100vh" },
              500,
              function () {
                if (travelActive % 2 == 0) {
                  $("#travelBackground.hidden")
                    .animate({ left: "0" }, 1000)
                    .addClass("active")
                    .promise()
                    .done(function () {
                      $("#travelOverlay.overlay")
                        .fadeIn()
                        .addClass("active")
                        .css("display", "flex")
                        .promise()
                        .done();
                    });
                }
                travelActive++;
                aboutMeActive = 0;
              }
            );
            showingContactSlider = false;
          });
      });
  });

  //Slide up "Contact Me" section
  var showingContactSlider = false;
  $("#contactMe").click(function () {
    $(".overlay") //Remove any overlays active
      .fadeOut()
      .promise()
      .done(function () {
        $(".hidden") //Remove any photo backgrounds active
          .animate({ left: "100vw" }, 1000)
          .removeClass("active")
          .promise()
          .done(function () {
            if (!showingContactSlider) {
              //This if condition is to ensure the interaction with the other pages is correct
              showingContactSlider = true;
              $(".contactMeBlock").animate({ bottom: 0 }, 500).promise().done();
              travelActive = 0;
              aboutMeActive = 0;
            } else if (showingContactSlider) {
              showingContactSlider = false;
              $(".contactMeBlock")
                .animate({ bottom: "-100vh" }, 500)
                .promise()
                .done();
              travelActive = 0;
              aboutMeActive = 0;
            }
          });
      });
  });
});

//Form submission
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined the HTML form

  var form = document.getElementById("emailMe");
  var button = document.getElementById("emailMeButton");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    return alert("Thanks, I'll yell back soon!");
  }

  function error() {
    return alert("Yell louder, your message isn't getting through!");
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
